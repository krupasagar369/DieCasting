export const MESSAGE_MIN = 10;
export const MESSAGE_MAX = 500;

/** keep digits only, max 10 (Indian mobile number) */
export function sanitizePhone(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

export function validateContact(phone: string, message: string): string | null {
  if (!/^\d{10}$/.test(phone)) return "Please enter a valid 10-digit phone number";
  if (message.trim().length < MESSAGE_MIN) return "Message should be at least 10 characters long";
  return null;
}
