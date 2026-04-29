export const DEFAULT_SITE_URL = "https://marmasec.com";

const STATIC_SITEMAP_PATHS = [
  "/",
  "/about-us",
  "/careers",
  "/contact-us",
  "/partners",
  "/privacy",
  "/product",
  "/solutions",
  "/support",
  "/technology",
] as const;

const SOLUTION_SITEMAP_PATHS = [
  "/solutions/healthcare",
  "/solutions/legal",
  "/solutions/finance",
  "/solutions/manufacturing",
  "/solutions/small-and-medium-business",
  "/solutions/education",
  "/solutions/residential",
] as const;

type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function normalizeSiteUrl(siteUrl: string): string {
  return `${siteUrl.replace(/\/+$/, "")}/`;
}

export function buildSitemapEntries(
  siteUrl = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_SITE_URL,
  lastModified = new Date(),
): SitemapEntry[] {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);

  const staticEntries: SitemapEntry[] = STATIC_SITEMAP_PATHS.map((path) => ({
    url: new URL(path, normalizedSiteUrl).toString(),
    lastModified,
    changeFrequency:
      path === "/" || path === "/product" || path === "/solutions" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const solutionEntries: SitemapEntry[] = SOLUTION_SITEMAP_PATHS.map((path) => ({
    url: new URL(path, normalizedSiteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    ...solutionEntries,
  ];
}
