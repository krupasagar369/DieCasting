"use client";

import Link from "next/link";
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { faqItems } from "@/data/faqs";
import { Collapse } from "@/components/ui/Collapse";
import { cn } from "@/lib/cn";

const HIGHLIGHT: CSSProperties = { borderColor: "#ff6600", backgroundColor: "#fff8f3" };
const NORMAL: CSSProperties = { borderColor: "#e0e0e0", backgroundColor: "#ffffff" };

/** FAQ search box + accordion (one item open at a time, like Bootstrap's data-bs-parent). */
export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const term = query.toLowerCase().trim();
  const matches = (q: string, text: string) => q.toLowerCase().includes(term) || text.toLowerCase().includes(term);
  const visibleCount = faqItems.filter((f) => matches(f.question, f.text)).length;

  const onToggle = (id: string, button: HTMLButtonElement) => {
    const opening = openId !== id;
    setOpenId(opening ? id : null);
    if (!opening) return;
    // original: after the 350ms collapse animation, scroll the opened question into view
    window.setTimeout(() => {
      const top = button.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }, 350);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Escape") return;
    setQuery("");
    inputRef.current?.blur();
  };

  return (
    <>
      <div className="faq-search-box">
        <i className="fas fa-search"></i>
        <input
          ref={inputRef}
          type="text"
          id="faqSearch"
          placeholder="Search your question..."
          className="faq-search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSearched(true);
          }}
          onKeyDown={onKeyDown}
        />
      </div>

      <div className="accordion faq-accordion" id="faqAccordion">
        {faqItems.map((faq) => {
          const isVisible = matches(faq.question, faq.text);
          const isOpen = openId === faq.id;
          const style: CSSProperties | undefined = !searched
            ? undefined
            : { display: isVisible ? "block" : "none", ...(term.length > 0 ? HIGHLIGHT : NORMAL) };
          return (
            <div className="accordion-item faq-item" key={faq.id} style={style}>
              <h2 className="accordion-header">
                <button
                  className={cn("accordion-button", !isOpen && "collapsed")}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={faq.id}
                  onClick={(e) => onToggle(faq.id, e.currentTarget)}
                >
                  <span className="faq-number">{faq.number}</span>
                  <span className="faq-question">{faq.question}</span>
                </button>
              </h2>
              <Collapse open={isOpen} id={faq.id} className="accordion-collapse">
                <div className="accordion-body">{faq.answer}</div>
              </Collapse>
            </div>
          );
        })}

        {visibleCount === 0 && term.length > 0 ? (
          <div className="no-results-message">
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                background: "#f8f9fa",
                borderRadius: "15px",
                border: "2px dashed #ddd",
              }}
            >
              <i className="fas fa-search" style={{ fontSize: "3rem", color: "#ff6600", marginBottom: "20px" }}></i>
              <h4 style={{ color: "#000", marginBottom: "10px" }}>No results found</h4>
              <p style={{ color: "#666", marginBottom: "20px" }}>
                We couldn&apos;t find any FAQs matching &quot;{term}&quot;
              </p>
              <Link href="/contact" className="btn-cta" style={{ padding: "12px 30px", fontSize: "0.95rem" }}>
                Contact Us for Help
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
