import { Suspense } from 'react';

import styles from './style.module.css';

import { FaqLayoutContent, Sidebar } from '@/components/faq';

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.faqLayoutContainer}>
      <Sidebar />

      <Suspense>
        <FaqLayoutContent>{children}</FaqLayoutContent>
      </Suspense>
    </div>
  );
}
