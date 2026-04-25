import type { MetadataRoute } from 'next';

const BASE = 'https://izzonline.it';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/#about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/#skills`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/#experience`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/#education`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/#contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
