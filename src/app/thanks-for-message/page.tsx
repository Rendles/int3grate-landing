import type { Metadata } from 'next';

import styles from './style.module.css';

export const metadata: Metadata = {
  title: 'Thanks for your message'
};

export default function ThanksForMessagePage() {
  return (
    <section className={styles.page}>
      <h1>Thanks for your message</h1>
    </section>
  );
}
