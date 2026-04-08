import type { Metadata } from 'next';

import styles from './style.module.css';

export const metadata: Metadata = {
  title: 'Get a Demo'
};

export default function GetADemoPage() {
  return (
    <section className={styles.page}>
      <h1>Get a Demo</h1>
    </section>
  );
}
