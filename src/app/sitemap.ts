import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zylera.com';
  const currentDate = new Date();

  // Static routes
  const routes = [
    '',
    '/ai-assistant',
    '/blog',
    '/shop',
    '/resources',
    '/contact',
    '/membership',
    '/courses',
    '/academy',
    '/events',
    '/login',
    '/signup',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Blog articles (add your dynamic blog routes here)
  // You can fetch actual blog slugs from your data source
  const blogRoutes = [
    '/blog/understanding-libido',
    '/blog/stress-and-intimacy',
    '/blog/natural-supplements',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Shop products (add your dynamic product routes here)
  const shopRoutes = [
    '/shop/product-1',
    '/shop/product-2',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes, ...shopRoutes];
}
