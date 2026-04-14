import type { Metadata } from 'next';

import { Button, Link } from '@/shared';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-6)',
        minHeight: '60vh',
        padding: 'var(--page-gutter)',
        textAlign: 'center'
      }}>
      <h1 style={{ fontSize: 'var(--font-size-5xl)', letterSpacing: 'var(--tracking-tighter)' }}>404</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', maxWidth: '48ch' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button color="green" size="lg">
          Back to homepage
        </Button>
      </Link>
    </section>
  );
}
