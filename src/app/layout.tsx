import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

const title = 'Carlos Ibarra — AI Engineer for Financial Services';
const description =
  'AI engineer with 20+ years in technology, mostly for financial services. I build AI with correct answers, controlled actions, and decisions that can be checked.';

export const metadata: Metadata = {
  metadataBase: new URL('https://c-ibarra.github.io'),
  title: {
    default: title,
    template: '%s | Carlos Ibarra',
  },
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
