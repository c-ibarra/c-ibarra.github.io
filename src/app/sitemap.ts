import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://c-ibarra.github.io';

  const docs = source.getPages().map((page) => ({
    url: `${base}${page.url}`,
    lastModified: new Date(),
  }));

  return [{ url: base, lastModified: new Date() }, ...docs];
}
