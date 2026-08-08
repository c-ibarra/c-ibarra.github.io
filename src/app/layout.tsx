import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://c-ibarra.github.io'),
  title: {
    default: 'Carlos Ibarra — Data Science & AI Engineer',
    template: '%s | Carlos Ibarra',
  },
  description:
    'Program and Release Manager with 20+ years of technical program leadership, now building applied AI/ML systems — context engineering, agentic systems, and LLM infrastructure.',
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
