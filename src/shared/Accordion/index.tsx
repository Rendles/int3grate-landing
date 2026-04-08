'use client';

import { useState } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

import { Image } from '@/shared';

interface AccordionProps {
  data: { title: string; content: string }[];
}

export const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={styles.accordion}>
      {data.map(({ title, content }, i) => (
        <button className={styles.accordionItem} key={i} onClick={() => toggle(i)}>
          <div className={styles.accordionTitle}>
            <p className={styles.accordionTitleText}>
              <Image src="/icons/circle-help.svg" alt="circle-help" width={24} height={24} />
              {title}
            </p>
            <Image
              src="/icons/chevron-down.svg"
              alt="chevron-down"
              width={32}
              height={32}
              className={clsx(styles.accordionTitleIcon, selected === i && styles.accordionTitleIconOpen)}
            />
          </div>
          <div className={clsx(styles.accordionContent, selected === i && styles.accordionContentShow)}>
            <p className={styles.accordionContentText}>{content}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
