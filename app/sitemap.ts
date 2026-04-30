import type { MetadataRoute } from "next";

const BASE_URL = "https://kdiae.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                          lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,               lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE_URL}/about/vision-mission`,lastModified: now, changeFrequency: "yearly",   priority: 0.6 },
    { url: `${BASE_URL}/about/chairman`,      lastModified: now, changeFrequency: "yearly",   priority: 0.6 },
    { url: `${BASE_URL}/about/principal`,     lastModified: now, changeFrequency: "yearly",   priority: 0.6 },
    { url: `${BASE_URL}/about/administration`,lastModified: now, changeFrequency: "yearly",   priority: 0.5 },
    { url: `${BASE_URL}/about/team`,          lastModified: now, changeFrequency: "yearly",   priority: 0.5 },
    { url: `${BASE_URL}/academics`,           lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE_URL}/admissions`,          lastModified: now, changeFrequency: "weekly",   priority: 0.9 },
    { url: `${BASE_URL}/gallery`,             lastModified: now, changeFrequency: "weekly",   priority: 0.7 },
    { url: `${BASE_URL}/contact`,             lastModified: now, changeFrequency: "yearly",   priority: 0.7 },
  ];

  return staticRoutes;
}
