"use client";

import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type FormEvent } from "react";
import { buildWhatsAppUrl } from "@/services/whatsapp";
import { MESSAGE_MAX, MESSAGE_MIN, sanitizePhone, validateContact } from "@/utils/validation";

type Status = "idle" | "error" | "success";
type Field = "firstName" | "lastName" | "email" | "phone" | "subject" | "message";

const EMPTY: Record<Field, string> = { firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" };

/** Contact form: validates, then opens WhatsApp with the formatted message (behaviour of the original contact.js). */
export function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [borders, setBorders] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const set = (field: Field, value: string) => setValues((v) => ({ ...v, [field]: value }));
  const flash = (next: Status) => {
    setStatus(next);
    setTouched(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 3000);
  };

  const onFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setBorders((b) => ({ ...b, [e.target.name]: "#ff6600" }));
  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setBorders((b) => ({ ...b, [e.target.name]: e.target.value.trim() === "" ? "#dc3545" : "#ddd" }));
  const borderStyle = (f: Field): CSSProperties | undefined => (borders[f] ? { borderColor: borders[f] } : undefined);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    const clean = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])) as Record<Field, string>;
    const problem = validateContact(clean.phone, clean.message);
    if (problem) {
      setError(problem);
      flash("error");
      return;
    }
    window.open(buildWhatsAppUrl(clean), "_blank", "noopener,noreferrer");
    flash("success");
    setValues(EMPTY);
  };

  const len = values.message.length;
  const countColor = len < MESSAGE_MIN ? "#dc3545" : len > 450 ? "#ff6600" : "#999";
  const btnBg = status === "error" ? "#dc3545" : status === "success" ? "#28a745" : touched ? "#6d5d4b" : undefined;

  return (
    <form id="contactForm" className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>{" "}
          <input type="text" id="firstName" name="firstName" required placeholder="Your first name" value={values.firstName} onChange={(e) => set("firstName", e.target.value)} onFocus={onFocus} onBlur={onBlur} style={borderStyle("firstName")} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>{" "}
          <input type="text" id="lastName" name="lastName" required placeholder="Your last name" value={values.lastName} onChange={(e) => set("lastName", e.target.value)} onFocus={onFocus} onBlur={onBlur} style={borderStyle("lastName")} />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>{" "}
        <input type="email" id="email" name="email" required placeholder="your.email@example.com" value={values.email} onChange={(e) => set("email", e.target.value)} onFocus={onFocus} onBlur={onBlur} style={borderStyle("email")} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>{" "}
        <input type="text" id="phone" name="phone" required maxLength={10} inputMode="numeric" placeholder="Enter 10-digit phone number" value={values.phone} onChange={(e) => set("phone", sanitizePhone(e.target.value))} onFocus={onFocus} onBlur={onBlur} style={borderStyle("phone")} />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>{" "}
        <input type="text" id="subject" name="subject" required placeholder="What would you like to discuss?" value={values.subject} onChange={(e) => set("subject", e.target.value)} onFocus={onFocus} onBlur={onBlur} style={borderStyle("subject")} />
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell us about your project</label>
        <textarea id="message" name="message" rows={5} required placeholder="Share your vision, requirements, specifications, and any specific needs..." value={values.message} onChange={(e) => set("message", e.target.value)} onFocus={onFocus} onBlur={onBlur} style={borderStyle("message")}></textarea>
        <span className="char-count" style={{ color: len === 0 ? undefined : countColor }}>
          {len}/{MESSAGE_MAX} characters (minimum {MESSAGE_MIN} characters)
        </span>
      </div>
      <button type="submit" className="submit-btn" disabled={status !== "idle"} style={btnBg ? { background: btnBg } : undefined} aria-live="polite">
        <span>{status === "error" ? error : status === "success" ? "MESSAGE SENT SUCCESSFULLY! ✓" : "SCHEDULE FREE CONSULTATION"}</span>
      </button>
    </form>
  );
}
