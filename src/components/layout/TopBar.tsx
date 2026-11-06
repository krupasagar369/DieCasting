import type { ShellVariant } from "@/types";
import { SOCIAL_ICONS } from "@/data/site";

function TopBarContent({ variant }: { variant: ShellVariant }) {
  // NOTE: the main-site pages of the original link to tel:+15551234567 / info@diecastingpro.com
  // while displaying the real number/email; the industry pages use the real ones. Kept as-is.
  const tel = variant === "main" ? "tel:+15551234567" : "tel:+917899961306";
  const mail = variant === "main" ? "mailto:info@diecastingpro.com" : "mailto:sales@pighalitadhatu.com";
  return (
    <div className="top-bar-content">
      <div className="contact-info">
        <a href={tel} className="top-link">
          <i className="fas fa-mobile-alt"></i> +91 7899961306
        </a>
        <a href={mail} className="top-link">
          <i className="fas fa-envelope"></i> sales@pighalitadhatu.com
        </a>
      </div>
      <div className="social-links">
        {SOCIAL_ICONS.map((icon) => (
          <a key={icon} href="#" className="social-icon" aria-label={icon.split(" ")[1]?.replace("fa-", "")}>
            <i className={icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export function TopBar({ variant }: { variant: ShellVariant }) {
  return (
    <div className="top-bar">
      <div className="container">
        {variant === "main" ? (
          <div className="row">
            <div className="col-md-12">
              <TopBarContent variant={variant} />
            </div>
          </div>
        ) : (
          <TopBarContent variant={variant} />
        )}
      </div>
    </div>
  );
}
