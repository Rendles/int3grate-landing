import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/get-a-demo`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/become-an-early-adopter`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/thanks-for-message`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/faq/ip-scanner`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/faq/maintenance`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/faq/miners`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/faq/pools`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date()
    }
  ];
}
