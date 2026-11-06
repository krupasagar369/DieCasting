export type HeadingPart = string | { highlight: string };

export interface IndustryStat {
  icon: string;
  label: string;
  /** static value such as "AS9100" or "±0.05" */
  value?: string;
  /** animated value: counts up to `target`, followed by `suffix` (e.g. "+ MW") */
  target?: number;
  suffix?: string;
}

export interface IndustryData {
  slug: string;
  pageTitle: string;
  breadcrumb: string;
  heroImage: { src: string; alt: string };
  badge: { icon: string; label: string };
  heading: HeadingPart[];
  intro: string;
  overview: {
    image: { src: string; alt: string };
    heading: string;
    paragraphs: string[];
    features: string[];
  };
  products: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; text: string }[];
  };
  stats: IndustryStat[];
  why: { title: string; subtitle: string; items: string[] };
  cta: { title: string; text: string; button: string };
  footerText: string;
}
