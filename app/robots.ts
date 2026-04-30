import type { MetadataRoute } from "next";
import { DEFAULT_SITE_URL } from "@/lib/seo/sitemap";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_SITE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl.replace(/\/+$/, "")}/sitemap.xml`,
  };
}
