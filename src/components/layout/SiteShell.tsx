import type { ReactNode } from "react";
import type { ShellVariant } from "@/types";
import { cn } from "@/lib/cn";
import { TopBar } from "./TopBar";
import { SiteNavbar } from "./SiteNavbar";
import { SiteFooter } from "./SiteFooter";
import { ScrollTopButton } from "./ScrollTopButton";
import { PageEffects, type EffectsKind } from "./PageEffects";

interface SiteShellProps {
  variant?: ShellVariant;
  /** extra wrapper class that scopes a page stylesheet, e.g. `page-about` */
  pageClass?: string;
  effects: EffectsKind;
  /** about.js faded the whole page in on load */
  fadeIn?: boolean;
  footerTagline?: string;
  children: ReactNode;
}

/** Top bar + navbar + page content + footer + scroll-to-top button, wrapped in the scope class of the page CSS. */
export function SiteShell({ variant = "main", pageClass, effects, fadeIn, footerTagline, children }: SiteShellProps) {
  const wrapperClass = variant === "main" ? cn("site", pageClass, fadeIn && "page-fade-in") : "industries";
  return (
    <div id="page-root" className={wrapperClass}>
      <TopBar variant={variant} />
      <SiteNavbar variant={variant} />
      {children}
      <SiteFooter variant={variant} tagline={footerTagline} />
      <ScrollTopButton threshold={variant === "main" ? 300 : 400} />
      <PageEffects kind={effects} />
    </div>
  );
}
