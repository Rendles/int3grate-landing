import type { Metadata } from 'next';

import styles from './style.module.css';

export const metadata: Metadata = {
  title: 'FAQ',
  robots: { index: false, follow: true }
};

export default function FaqRootPage() {
  return (
    <section className={styles.page}>
      <h1>FAQ</h1>
    </section>
  );
}
