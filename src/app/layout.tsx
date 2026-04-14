import type { Metadata } from 'next';
import Script from 'next/script';

import '@/theme/globals.css';
import '@/theme/reset.css';

import { Footer, Navbar } from '@/components/core';
import { Providers } from '@/providers';
import { onest } from '@/theme/fonts';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Int3grate.ai — Agentic AI integration for real business operations',
    template: '%s | Int3grate.ai'
  },
  description:
    'Int3grate.ai designs and deploys practical AI workflows for growing companies. Automate execution across sales, admin, and operations while keeping humans in control.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Int3grate.ai'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Int3grate.ai',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description:
    'Int3grate.ai designs and deploys practical AI workflows for growing companies. Agentic AI integration for real business operations.',
  sameAs: []
};

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Int3grate.ai',
  url: BASE_URL
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <body>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
          strategy="beforeInteractive"
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
          strategy="beforeInteractive"
        />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
