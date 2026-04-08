import type { Metadata } from 'next';

import '@/theme/globals.css';
import '@/theme/reset.css';

import { Footer, Navbar } from '@/components/core';
import { Providers } from '@/providers';
import { onest } from '@/theme/fonts';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Landing',
    template: '%s | Landing'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.className}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
