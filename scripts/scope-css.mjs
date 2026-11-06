// One-time migration helper: copies the ORIGINAL stylesheets into src/styles,
// scoping every selector under a wrapper class (zero added specificity via :where)
// so that per-page sheets of the old multi-page site can coexist in one bundle.
import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";

const SRC = process.argv[2];
const OUT = path.resolve("src/styles");
fs.mkdirSync(OUT, { recursive: true });

const jobs = [
  { file: "style.css", wrapper: ".site", out: "site.css", tag: "site" },
  { file: "about.css", wrapper: ".page-about", out: "about.css", tag: "about" },
  { file: "contact.css", wrapper: ".page-contact", out: "contact.css", tag: "contact" },
  { file: "faqs.css", wrapper: ".page-faqs", out: "faqs.css", tag: "faqs" },
  { file: "industries.css", wrapper: ".industries", out: "industries.css", tag: "industries" },
  { file: "logo.css", wrapper: ".splash-page", out: "splash.css", tag: "splash" },
];

for (const job of jobs) {
  const css = fs.readFileSync(path.join(SRC, job.file), "utf8").replace(/\r/g, "");
  const root = postcss.parse(css);
  const scope = `:where(${job.wrapper})`;
  const report = [];

  // 1) drop the Google Fonts @import (loaded once from the root layout instead)
  root.walkAtRules("import", (a) => a.remove());

  // 2) namespace keyframes so identical names in different sheets don't clash
  const renames = new Map();
  root.walkAtRules(/keyframes$/, (a) => {
    const next = `${a.params}-${job.tag}`;
    renames.set(a.params, next);
    a.params = next;
  });
  root.walkDecls(/^animation(-name)?$/, (d) => {
    for (const [from, to] of renames) {
      d.value = d.value.replace(new RegExp(`(^|[\\s,])${from}(?=[\\s,;]|$)`, "g"), `$1${to}`);
    }
  });

  // 3) scope selectors
  root.walkRules((rule) => {
    const p = rule.parent;
    if (p && p.type === "atrule" && /keyframes$/.test(p.name)) return;
    rule.selectors = rule.selectors.map((raw) => {
      const s = raw.trim();
      const m = s.match(/^(html|body|:root)(?![\w-])(.*)$/);
      if (m) {
        report.push(s);
        return `${scope}${m[2]}`;
      }
      return `${scope} ${s}`;
    });
  });

  fs.writeFileSync(path.join(OUT, job.out), `/* Scoped copy of original ${job.file} (see scripts/scope-css.mjs) */\n` + root.toString());
  console.log(`${job.file} -> src/styles/${job.out} | html/body/:root rules remapped: ${report.length} | keyframes renamed: ${renames.size}`);
}
