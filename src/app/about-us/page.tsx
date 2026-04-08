import type { Metadata } from 'next';

import styles from './style.module.css';

export const metadata: Metadata = {
  title: 'About Us'
};

export default function AboutUsPage() {
  return (
    <section className={styles.page}>
      <h1>About Us</h1>
    </section>
  );
}
