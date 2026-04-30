import assert from "node:assert/strict";
import test from "node:test";

import { buildSitemapEntries } from "../lib/seo/sitemap.ts";

test("buildSitemapEntries returns every public sitemap URL as an absolute URL", () => {
  const lastModified = new Date("2026-04-29T00:00:00.000Z");

  const entries = buildSitemapEntries("https://example.com///", lastModified);

  assert.deepEqual(
    entries.map(({ url }) => url),
    [
      "https://example.com/",
      "https://example.com/about-us",
      "https://example.com/careers",
      "https://example.com/contact-us",
      "https://example.com/partners",
      "https://example.com/privacy",
      "https://example.com/product",
      "https://example.com/solutions",
      "https://example.com/support",
      "https://example.com/technology",
      "https://example.com/solutions/healthcare",
      "https://example.com/solutions/legal",
      "https://example.com/solutions/finance",
      "https://example.com/solutions/manufacturing",
      "https://example.com/solutions/small-and-medium-business",
      "https://example.com/solutions/education",
      "https://example.com/solutions/residential",
    ],
  );

  assert.ok(entries.every((entry) => entry.lastModified === lastModified));
});
