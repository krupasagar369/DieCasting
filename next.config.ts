import type { NextConfig } from "next";

/**
 * Every external image host below was taken from the original HTML/CSS/JS source:
 *  - images.unsplash.com          industry hero + overview images, home carousel
 *  - blog.transvalorusa.com       home carousel slide 1
 *  - www.investmentcastchina.com  home carousel slide 2
 *  - ik.imagekit.io               leadership photos
 *  - avatar.iran.liara.run        leadership placeholder avatars
 *  - zoophagous-gold-hz6i7xfwas.edgeone.app  about page logo image
 *  - wallpapercave.com            about page CSS background
 */
const imageHosts = [
  "images.unsplash.com",
  "blog.transvalorusa.com",
  "www.investmentcastchina.com",
  "ik.imagekit.io",
  "avatar.iran.liara.run",
  "zoophagous-gold-hz6i7xfwas.edgeone.app",
  "wallpapercave.com",
] as const;

/** Old `.html` URLs of the static site -> new App Router routes. */
const legacyRedirects = [
  ["/index.html", "/"],
  ["/home.html", "/home"],
  ["/about.html", "/about"],
  ["/leaders.html", "/leaders"],
  ["/Contact.html", "/contact"],
  ["/Contact Us.html", "/contact"],
  ["/FAQs.html", "/faqs"],
  ["/Blogs.html", "/blogs"],
  ["/Facility.html", "/facility"],
  ["/Aerospace.html", "/aerospace"],
  ["/Automotive.html", "/automotive"],
  ["/Oil and Gas.html", "/oil-and-gas"],
  ["/Energy.html", "/energy"],
  ["/Railway.html", "/railway"],
  ["/Heavy Engineering.html", "/heavy-engineering"],
  ["/Consumer Appliances.html", "/consumer-appliances"],
  ["/Electronics and Telecom.html", "/electronics-and-telecom"],
  ["/Industrial Equipment.html", "/industrial-equipment"],
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      // file names with spaces ("Oil and Gas.html") arrive percent-encoded, so match any separator there
      source: source.replaceAll(" ", "(.*)"),
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
