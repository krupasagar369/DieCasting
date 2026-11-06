export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/** Number comes from the original contact.js; override with NEXT_PUBLIC_WHATSAPP_NUMBER (country code, no "+"). */
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919611059935";

export function buildWhatsAppUrl(p: ContactPayload): string {
  const phone = `+91 ${p.phone.slice(0, 5)} ${p.phone.slice(5)}`;
  const text =
    `*New Contact Form Submission*\n\n` +
    `*Name:* ${p.firstName} ${p.lastName}\n` +
    `*Email:* ${p.email}\n` +
    `*Phone:* ${phone}\n` +
    `*Subject:* ${p.subject}\n\n` +
    `*Message:*\n${p.message}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
