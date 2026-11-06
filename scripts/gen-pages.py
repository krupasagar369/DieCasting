import re, sys, json, os
sys.path.insert(0, "scripts")
from html2jsx import load, to_jsx, children_jsx, main_content, esc_text
from bs4 import NavigableString

O = "/home/claude/orig/die-casting-main/die-casting-main/"
js = lambda s: json.dumps(s, ensure_ascii=False)

def meta_ts(soup, title):
    m = {}
    for t in soup.head.find_all("meta"):
        n = t.get("name") or t.get("property")
        if n: m[n] = t.get("content", "")
    lines = [f"  title: {js(title)},"]
    if m.get("description"): lines.append(f"  description:\n    {js(m['description'])},")
    if m.get("keywords"): lines.append(f"  keywords:\n    {js(m['keywords'])},")
    if m.get("author"): lines.append(f"  authors: [{{ name: {js(m['author'])} }}],")
    if m.get("robots"): lines.append("  robots: { index: true, follow: true },")
    if m.get("og:title"):
        lines.append("  openGraph: {")
        lines.append(f"    title: {js(m['og:title'])},")
        if m.get("og:description"): lines.append(f"    description:\n      {js(m['og:description'])},")
        lines.append(f"    type: {js(m.get('og:type','website'))},")
        lines.append("  },")
    return "export const metadata: Metadata = {\n" + "\n".join(lines) + "\n};\n"

def indent(body, n):  # re-indent generated depth-3 (6 spaces) block
    return body

def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, "w", encoding="utf-8").write(text)

def page(route, fname, title, shell_props, imports, body, comp):
    soup = load(O + fname)
    src = f'import type {{ Metadata }} from "next";\n{imports}\n\n{meta_ts(soup, title)}\nexport default function {comp}() {{\n  return (\n    <SiteShell {shell_props}>\n{body}\n    </SiteShell>\n  );\n}}\n'
    write(f"src/app/{route}/page.tsx", src)

def body_of(fname, skip=None):
    soup = load(O + fname)
    return "\n".join(to_jsx(e, 3) for e in main_content(soup)), soup

# ---------------- about ----------------
body, _ = body_of("about.html")
body = re.sub(r'<div className="stat-number">([^<]+)</div>', r'<AnimatedStat value="\1" />', body)
page("about", "about.html", "PIGHALITADHATU_About Our Company", 'pageClass="page-about" effects="about" fadeIn',
     'import Link from "next/link";\nimport { SiteShell } from "@/components/layout/SiteShell";\nimport { AnimatedStat } from "@/components/ui/AnimatedStat";', body, "AboutPage")

# ---------------- leaders ----------------
body, _ = body_of("leaders.html")
names = iter(["Buddi K Gangadhara", "Renuka N B", "Ramesh H", "Dummy Name 1", "Dummy Name 2"])
body = re.sub(r"<img src=", lambda m: f'<img alt={js(next(names))} src=', body)
page("leaders", "leaders.html", "PIGHALITADHATU_Leadership", 'pageClass="page-about" effects="about" fadeIn',
     'import { SiteShell } from "@/components/layout/SiteShell";', body, "LeadersPage")

# ---------------- blogs ----------------
body, _ = body_of("Blogs.html")
page("blogs", "Blogs.html", "Die Casting Pro - Precision Die Casting Excellence", 'effects="main"',
     'import { SiteShell } from "@/components/layout/SiteShell";', body, "BlogsPage")

# ---------------- contact ----------------
body, _ = body_of("Contact.html")
body = re.sub(r'<form id="contactForm".*?</form>', '<ContactForm />', body, flags=re.S)
page("contact", "Contact.html", "PIGHALITADHATU_Contact Us", 'pageClass="page-contact" effects="main"',
     'import { SiteShell } from "@/components/layout/SiteShell";\nimport { ContactForm } from "@/components/common/ContactForm";', body, "ContactPage")

# ---------------- faqs ----------------
soup = load(O + "FAQs.html")
items = []
for it in soup.select("#faqAccordion .faq-item"):
    btn = it.select_one(".accordion-button")
    body_el = it.select_one(".accordion-body")
    items.append({
        "id": it.select_one(".accordion-collapse")["id"],
        "number": it.select_one(".faq-number").get_text(strip=True),
        "question": it.select_one(".faq-question").get_text(strip=True),
        "text": body_el.get_text(" ", strip=True),
        "jsx": children_jsx(body_el, 4, lambda n: False),
    })
out = ['import type { ReactNode } from "react";', 'import Link from "next/link";', "",
       "export interface FaqItem {", "  id: string;", "  number: string;", "  question: string;",
       "  /** plain text of the answer, used by the search box */", "  text: string;", "  answer: ReactNode;", "}", "",
       "export const faqItems: FaqItem[] = ["]
for f in items:
    out += ["  {", f"    id: {js(f['id'])},", f"    number: {js(f['number'])},", f"    question: {js(f['question'])},",
            f"    text: {js(re.sub(r'\\s+', ' ', f['text']))},", "    answer: (", "      <>", f["jsx"], "      </>", "    ),", "  },"]
out.append("];")
write("src/data/faqs.tsx", "\n".join(out) + "\n")
cta = soup.select_one(".faq-cta")
cta_jsx = to_jsx(cta, 6)
page_src = f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import {{ SiteShell }} from "@/components/layout/SiteShell";
import {{ FaqAccordion }} from "@/components/common/FaqAccordion";

{meta_ts(soup, "PIGHALITADHATU_FAQ's")}
export default function FaqsPage() {{
  return (
    <SiteShell pageClass="page-faqs" effects="main">
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FaqAccordion />
{cta_jsx}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}}
'''
write("src/app/faqs/page.tsx", page_src)

# ---------------- industries ----------------
FILES = {"aerospace": "Aerospace", "automotive": "Automotive", "oil-and-gas": "Oil and Gas", "energy": "Energy",
         "railway": "Railway", "heavy-engineering": "Heavy Engineering", "consumer-appliances": "Consumer Appliances",
         "electronics-and-telecom": "Electronics and Telecom", "industrial-equipment": "Industrial Equipment"}
def txt(el): return re.sub(r"\s+", " ", el.get_text()).strip()
def icon(el):
    i = el.find("i"); return " ".join(c for c in i["class"] if c not in ("fas", "fab", "me-2", "feature-icon")) .replace("fa-", "", 1) if i else ""
rows = []
for slug, f in FILES.items():
    s = load(O + f + ".html")
    d = {"slug": slug, "pageTitle": txt(s.title)}
    d["breadcrumb"] = txt(s.select_one(".breadcrumb-item.active"))
    hero = s.select_one(".industry-hero")
    d["heroImage"] = {"src": hero.img["src"], "alt": hero.img["alt"]}
    badge = hero.select_one(".hero-badge")
    d["badge"] = {"icon": icon(badge), "label": txt(badge)}
    h1 = hero.h1
    d["heading"] = [({"highlight": txt(c)} if getattr(c, "name", None) == "span" else None) or str(c) for c in h1.children]
    d["heading"] = [x if isinstance(x, dict) else re.sub(r"\s+", " ", x) for x in d["heading"]]
    d["intro"] = txt(hero.select_one(".hero-content > p"))
    ov = s.select_one(".overview-section")
    d["overview"] = {"image": {"src": ov.select_one("img.overview-img")["src"], "alt": ov.select_one("img.overview-img")["alt"]},
                     "heading": txt(ov.h2), "paragraphs": [txt(p) for p in ov.select(".overview-text > p")],
                     "features": [txt(li) for li in ov.select(".feature-list li")]}
    pr = s.select_one(".products-section")
    d["products"] = {"title": txt(pr.h2), "subtitle": txt(pr.select_one("p.text-muted")),
                     "items": [{"icon": icon(c), "title": txt(c.select_one(".product-card-title")), "text": txt(c.select_one(".product-card-text"))} for c in pr.select(".product-card")]}
    stats = []
    for c in s.select(".stats-section .stat-card"):
        h3 = c.select_one(".stat-number"); sp = h3.select_one("[data-target]")
        st = {"icon": icon(c.select_one(".stat-icon")), "label": txt(c.select_one(".stat-label"))}
        if sp:
            st["target"] = int(sp["data-target"]); st["suffix"] = txt(h3)[len(sp.get_text(strip=True)):]
        else:
            st["value"] = txt(h3)
        stats.append(st)
    d["stats"] = stats
    why = s.select_one(".why-section")
    d["why"] = {"title": txt(why.h2), "subtitle": txt(why.select_one("p.mt-4")), "items": [txt(h) for h in why.select(".feature-title")]}
    cta = s.select_one(".cta-section")
    d["cta"] = {"title": txt(cta.h2), "text": txt(cta.p), "button": txt(cta.select_one("a"))}
    d["footerText"] = txt(s.select_one(".footer-text"))
    rows.append(d)
ts = ['import type { IndustryData } from "@/types/industry";', "", "/** Extracted 1:1 from the original Aerospace/Automotive/... .html pages (same template, different content). */",
      "export const industries: IndustryData[] = " + json.dumps(rows, ensure_ascii=False, indent=2) + ";", ""]
write("src/data/industries.ts", "\n".join(ts))
print("pages generated; industries:", len(rows))
