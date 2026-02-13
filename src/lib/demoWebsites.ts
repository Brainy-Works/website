export type DemoWebsite = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

export const demoWebsites: DemoWebsite[] = [
  {
    slug: "urban-spice",
    title: "Urban Spice",
    category: "Restaurant",
    description: "Modern restaurant landing page demo with sections and menu feel.",
  },
  {
    slug: "titan-fitness",
    title: "Titan Fitness",
    category: "Fitness",
    description: "Gym/fitness website demo focused on offers, classes, and conversions.",
  },
  {
    slug: "sharma-associates",
    title: "Sharma Associates",
    category: "Professional Services",
    description: "Professional services demo layout with trust-first structure.",
  },
  {
    slug: "healing-touch",
    title: "Healing Touch",
    category: "Healthcare",
    description: "Clinic/wellness website demo designed for bookings and clarity.",
  },
  {
    slug: "novacare",
    title: "NovaCare",
    category: "Healthcare",
    description: "Healthcare demo with services-first layout and clean content hierarchy.",
  },
  {
    slug: "apex-academy",
    title: "Apex Academy",
    category: "Education",
    description: "Academy/school demo with admissions and program storytelling.",
  },
  {
    slug: "bright-future-academy",
    title: "Bright Future Academy",
    category: "Education",
    description: "Education website demo with modern hero and program sections.",
  },
  {
    slug: "auraspaces",
    title: "AuraSpaces",
    category: "Real Estate & Interiors",
    description: "Showcase-style demo for spaces, projects, and visual portfolios.",
  },
  {
    slug: "royalwood",
    title: "Royalwood Showcase",
    category: "Real Estate & Interiors",
    description: "Premium showcase demo with emphasis on craftsmanship and visuals.",
  },
];

export const demoWebsitesByCategory = demoWebsites.reduce<Record<string, DemoWebsite[]>>(
  (acc, website) => {
    acc[website.category] ??= [];
    acc[website.category].push(website);
    return acc;
  },
  {},
);

export function getDemoWebsite(slug: string | undefined) {
  if (!slug) return undefined;
  return demoWebsites.find((d) => d.slug === slug);
}

export function getDemoIframeSrc(slug: string) {
  return `/demos/${slug}/`;
}
