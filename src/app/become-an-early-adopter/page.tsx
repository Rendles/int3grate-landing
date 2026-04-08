import type { Metadata } from 'next';

import styles from './style.module.css';

export const metadata: Metadata = {
  title: 'Become an Early Adopter'
};

export default function BecomeAnEarlyAdopterPage() {
  return (
    <section className={styles.page}>
      <h1>Become an Early Adopter</h1>
    </section>
  );
}
