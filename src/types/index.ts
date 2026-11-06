export interface NavLinkItem {
  label: string;
  href: string;
  /** small grey description rendered under the label in the products dropdown */
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavLinkItem[];
}

export type NavEntry = ({ type: "link" } & NavLinkItem) | ({ type: "dropdown" } & NavGroup);

export type ShellVariant = "main" | "industries";
