import { MetadataRoute } from 'next'
import siteConfig from "@/lib/metadata"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/apps`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]

  return routes
} 