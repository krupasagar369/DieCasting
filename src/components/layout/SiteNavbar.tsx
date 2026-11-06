"use client";

import Link from "next/link";
import { useCallback, useRef, useState, type CSSProperties } from "react";
import { buildNav, BRAND } from "@/data/site";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Collapse } from "@/components/ui/Collapse";
import { cn } from "@/lib/cn";
import type { ShellVariant } from "@/types";

export function SiteNavbar({ variant }: { variant: ShellVariant }) {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // main site: `.scrolled` class after 50px; industry pages: box-shadow after 80px (as in the original scripts)
  const scrolled = useScrolledPast(variant === "main" ? 50 : 80);
  const entries = buildNav(variant === "main" ? "Contact us" : "Contact Us");

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);
  useOutsideClick(navRef, menuOpen || openDropdown !== null, closeAll);

  const navStyle: CSSProperties | undefined =
    variant === "industries" ? { boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.12)" : "none" } : undefined;
  const togglerStyle: CSSProperties | undefined = variant === "main" ? { borderColor: "black" } : undefined;

  return (
    <nav
      ref={navRef}
      className={cn("navbar navbar-expand-lg navbar-dark", variant === "main" && scrolled && "scrolled")}
      id="navbar"
      style={navStyle}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          { }
          <img src={BRAND.logo} alt="Company Logo" className="company-logo" />
          <div className="brand-text-container">
            <span className="brand-text">{BRAND.name}</span>
            <p className="QUT">{BRAND.legalName}</p>
            <p className="gre">{BRAND.motto}</p>
          </div>
        </Link>

        <button
          className={cn("navbar-toggler", !menuOpen && "collapsed")}
          type="button"
          style={togglerStyle}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Collapse open={menuOpen} id="navbarNav" className="navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {entries.map((entry) =>
              entry.type === "link" ? (
                <li className="nav-item" key={entry.label}>
                  <Link className="nav-link" href={entry.href} onClick={closeAll}>
                    {entry.label}
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown" key={entry.label}>
                  <a
                    className={cn("nav-link dropdown-toggle", openDropdown === entry.label && "show")}
                    href="#"
                    role="button"
                    aria-expanded={openDropdown === entry.label}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown((cur) => (cur === entry.label ? null : entry.label));
                    }}
                  >
                    {entry.label}
                  </a>
                  <ul
                    className={cn("dropdown-menu", openDropdown === entry.label && "show")}
                    data-bs-popper="static"
                  >
                    {entry.items.map((item) => (
                      <li key={item.href}>
                        <Link className="dropdown-item" href={item.href} onClick={closeAll}>
                          {item.label}
                          {item.description ? <span className="item-desc">{item.description}</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </Collapse>
      </div>
    </nav>
  );
}
