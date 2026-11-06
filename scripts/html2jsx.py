#!/usr/bin/env python3
"""One-time migration helper: converts the ORIGINAL static HTML markup into JSX.
It keeps the DOM structure and class names untouched (so the original CSS still matches)."""
import re, sys
from bs4 import BeautifulSoup, NavigableString, Comment

ROUTES = {
    "index.html": "/", "home.html": "/home", "about.html": "/about", "leaders.html": "/leaders",
    "Contact.html": "/contact", "Contact Us.html": "/contact", "FAQs.html": "/faqs", "Blogs.html": "/blogs",
    "Aerospace.html": "/aerospace", "Automotive.html": "/automotive", "Oil and Gas.html": "/oil-and-gas",
    "Energy.html": "/energy", "Railway.html": "/railway", "Heavy Engineering.html": "/heavy-engineering",
    "Consumer Appliances.html": "/consumer-appliances", "Electronics and Telecom.html": "/electronics-and-telecom",
    "Industrial Equipment.html": "/industrial-equipment",
    # targets that do not exist in the source project (kept, they resolve to the 404 page)
    "Hydraulic.html": "/hydraulic", "Auto Electrical.html": "/auto-electrical",
    "Careers.html": "/careers", "Comparison.html": "/comparison", "our": "/our",
}
LOCAL_ASSETS = {
    "Piglithadathu_Final_Logo_RAJ.png": "/assets/Piglithadathu_Final_Logo_RAJ.png",
    "imgs/Piglithadathu_Final_Logo_RAJ.png": "/assets/Piglithadathu_Final_Logo_RAJ.png",
    "TopT.png": "/assets/TopT.png", "LeftTr.png": "/assets/LeftTr.png",
    "righttriangle.png": "/assets/righttriangle.png", "fire.png": "/assets/fire.png",
}
VOID = {"br", "hr", "img", "input", "meta", "link", "source", "wbr"}
INLINE = {"a", "span", "i", "b", "strong", "em", "small", "img", "button", "label", "input", "abbr", "code", "sup", "sub", "u"}
ATTR = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex", "colspan": "colSpan", "rowspan": "rowSpan",
        "maxlength": "maxLength", "autocomplete": "autoComplete", "readonly": "readOnly", "frameborder": "frameBorder",
        "allowfullscreen": "allowFullScreen", "srcset": "srcSet", "crossorigin": "crossOrigin", "datetime": "dateTime", "viewbox": "viewBox", "preserveaspectratio": "preserveAspectRatio"}
NUMERIC = {"maxLength", "rows", "cols", "colSpan", "rowSpan", "tabIndex", "size"}
BOOL = {"required", "disabled", "checked", "readonly", "multiple", "selected", "autofocus", "hidden", "controls", "loop", "muted"}

def camel(s):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), s)

def style_obj(v):
    items = []
    for decl in [d for d in v.split(";") if d.strip()]:
        k, _, val = decl.partition(":")
        k, val = k.strip(), val.strip().replace("\\", "\\\\").replace("'", "\\'")
        key = k if k.startswith("--") else camel(k)
        items.append(f"{key!r}: '{val}'" if k.startswith("--") else f"{key}: '{val}'")
    return "{{ " + ", ".join(items) + " }}"

def esc_text(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("{", "&#123;").replace("}", "&#125;")
             .replace("'", "&apos;").replace('"', "&quot;"))

def attrs(tag):
    out = []
    for k, v in tag.attrs.items():
        if k.startswith("data-bs-") or k == "onclick" or k == "onsubmit":
            continue
        name = ATTR.get(k, k if (k.startswith("data-") or k.startswith("aria-")) else camel(k))
        if isinstance(v, list):
            v = " ".join(v)
        if k == "style":
            out.append(f"style={style_obj(v)}")
        elif name in NUMERIC and str(v).isdigit():
            out.append(f"{name}={{{v}}}")
        elif k in BOOL and v in ("", k):
            out.append(name)
        elif k == "href" and tag.name == "a":
            out.append(f'href="{v}"')   # routing handled in link()
        elif k == "src" and v in LOCAL_ASSETS:
            out.append(f'src="{LOCAL_ASSETS[v]}"')
        else:
            out.append(f'{name}="{v.replace(chr(34), "&quot;")}"')
    return out

def route_for(href):
    if href in ROUTES: return ROUTES[href]
    base, _, frag = href.partition("#")
    if base in ROUTES: return ROUTES[base] + ("#" + frag if frag else "")
    return None

def to_jsx(node, depth=0, skip=lambda n: False):
    pad = "  " * depth
    if isinstance(node, Comment): return ""
    if isinstance(node, NavigableString): return ""
    if skip(node): return ""
    name = node.name
    a = dict(node.attrs)
    tagname = name
    at = attrs(node)
    if name == "a" and "href" in a:
        r = route_for(a["href"])
        if r is not None:
            tagname = "Link"
            at = [x for x in at if not x.startswith("href=")] + [f'href="{r}"']
            at.sort(key=lambda x: 0 if x.startswith("href") else 1)
    cls = a.get("class", [])
    if name == "a" and "btn" in cls and any(v in cls for v in ("btn-primary", "btn-outline-light", "btn-dark")) and "href" in a:
        variant = "primary" if "btn-primary" in cls else ("outlineLight" if "btn-outline-light" in cls else "dark")
        size = "lg" if "btn-lg" in cls else "default"
        extra = " ".join(c for c in cls if c not in ("btn", "btn-primary", "btn-outline-light", "btn-dark", "btn-lg"))
        tagname = "ButtonLink" if route_for(a["href"]) is not None else "ButtonAnchor"
        href = route_for(a["href"]) or a["href"]
        at = [f'href="{href}"', f'variant="{variant}"', f'size="{size}"'] + ([f'className="{extra}"'] if extra else [])
    open_tag = f"<{tagname}" + ("".join(" " + x for x in at)) 
    if name in VOID:
        return f"{pad}{open_tag} />"
    kids = children_jsx(node, depth + 1, skip)
    if not kids.strip():
        return f"{pad}{open_tag}></{tagname}>"
    # keep short inline-only content on one line
    if "\n" not in kids.strip() and len(kids.strip()) < 110 and all(isinstance(c, NavigableString) or c.name in INLINE for c in node.children if not isinstance(c, Comment)):
        return f"{pad}{open_tag}>{kids.strip()}</{tagname}>"
    return f"{pad}{open_tag}>\n{kids}\n{pad}</{tagname}>"

def is_inline(n):
    return (not isinstance(n, NavigableString)) and n.name in INLINE

def children_jsx(node, depth, skip):
    pad = "  " * depth
    kids = [c for c in node.children if not isinstance(c, Comment)]
    parts = []
    for i, c in enumerate(kids):
        prev = kids[i - 1] if i > 0 else None
        nxt = kids[i + 1] if i + 1 < len(kids) else None
        if isinstance(c, NavigableString):
            raw = str(c)
            collapsed = re.sub(r"\s+", " ", raw)
            if not collapsed.strip():
                if prev is not None and nxt is not None and is_inline(prev) and is_inline(nxt) and collapsed:
                    parts.append(f'{pad}{{" "}}')
                continue
            lead = collapsed.startswith(" ") and prev is not None and is_inline(prev)
            trail = collapsed.endswith(" ") and nxt is not None and is_inline(nxt)
            text = esc_text(collapsed.strip())
            # long text -> wrap lines at ~100 chars for readability
            words, lines, cur = text.split(" "), [], ""
            for w in words:
                if len(cur) + len(w) + 1 > 100 and cur:
                    lines.append(cur); cur = w
                else:
                    cur = (cur + " " + w).strip()
            lines.append(cur)
            if lead: parts.append(f'{pad}{{" "}}')
            parts.extend(pad + l for l in lines)
            if trail: parts.append(f'{pad}{{" "}}')
        else:
            if skip(c): continue
            parts.append(to_jsx(c, depth, skip))
    return "\n".join(p for p in parts if p)

def load(path):
    return BeautifulSoup(open(path, encoding="utf-8", errors="replace").read(), "html.parser")

def main_content(soup):
    """Everything in <body> between the navbar and the footer, minus scripts/scroll button."""
    body = soup.body
    nav = body.find("nav", class_="navbar")
    foot = body.find("footer")
    out, started = [], False
    for el in body.find_all(recursive=False):
        if el is nav: started = True; continue
        if el is foot: break
        if started and el.name not in ("script",) and el.get("id") != "scrollTopBtn":
            out.append(el)
    return out

if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    soup = load(src)
    chunks = [to_jsx(e, 3) for e in main_content(soup)]
    open(dst, "w", encoding="utf-8").write("\n".join(c for c in chunks if c) + "\n")
    print(f"{src} -> {dst}: {sum(c.count(chr(10)) for c in chunks)} lines")
