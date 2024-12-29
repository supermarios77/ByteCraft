import siteConfig from "@/lib/metadata"

export default async function sitemap() {
  const routes = [
    "",
    "/privacy",
    "/support",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 