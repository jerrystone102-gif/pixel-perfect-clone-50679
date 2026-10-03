import urls from "./portfolio-assets.json";

export type PortfolioCategory = "websites" | "webdev" | "mobile" | "branding";

export const PORTFOLIO_CATEGORIES: { id: "all" | PortfolioCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "webdev", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
];

export const CATEGORY_LABEL: Record<PortfolioCategory, string> = {
  websites: "Website Design",
  webdev: "Website Development",
  mobile: "Mobile App",
  branding: "Brand Identity",
};

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  description: string;
  cover: string;
  full: string;
  /** Tall full-page layouts scroll inside the lightbox. */
  tall: boolean;
  alt: string;
};

const U = urls as Record<string, string>;
const pad = (n: number) => String(n).padStart(2, "0");

const COPY: Record<PortfolioCategory, string[]> = {
  websites: [
    "Designed around usability, clarity and the customer journey.",
    "Built to create a stronger and more professional online presence.",
    "Created to make important information easier for customers to find.",
    "Designed with a clear focus on user experience, engagement and business goals.",
    "A modern page layout that guides visitors from first impression to enquiry.",
    "Designed to support stronger customer engagement and more conversion opportunities.",
  ],
  webdev: [
    "Built to simplify the customer experience and create more opportunities for enquiries.",
    "A responsive, working website that gives the business a modern digital presence.",
    "Developed to present services clearly and make it easy for visitors to get in touch.",
    "Built for a professional first impression on every screen size.",
    "Developed around a clear customer journey, from homepage to contact.",
  ],
  mobile: [
    "App screens designed around a simple, user-friendly experience.",
    "Clear navigation and product presentation designed for everyday use on mobile.",
    "A clean interface designed to keep key actions one tap away.",
  ],
  branding: [
    "Created to give the brand a stronger visual identity and a more professional market presence.",
    "A distinctive mark designed to be recognisable and easy to remember.",
    "Visual identity work built for consistent use across print and digital.",
  ],
};

function build(category: PortfolioCategory, prefix: string, count: number, tall = false): PortfolioItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = pad(i + 1);
    const cover = U[tall ? `${prefix}-${n}-cover.webp` : `${prefix}-${n}.webp`];
    const full = (tall ? U[`${prefix}-${n}-full.webp`] : cover) ?? "";
    const title = `${CATEGORY_LABEL[category]} Project ${n}`;
    return {
      id: `${prefix}-${n}`,
      category,
      title,
      description: COPY[category][i % COPY[category].length] ?? "",
      cover: cover ?? "",
      full,
      tall,
      alt: `${title} by Nedd Digital`,
    };
  });
}

export const PORTFOLIO: PortfolioItem[] = [
  ...build("websites", "wd", 22, true),
  ...build("webdev", "dev", 10),
  ...build("mobile", "mob", 6),
  ...build("branding", "logo", 10),
];
