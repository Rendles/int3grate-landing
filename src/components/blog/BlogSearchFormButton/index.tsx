'use client';

import { useFormStatus } from 'react-dom';

import styles from './style.module.css';

import { useIsMobile } from '@/hooks';
import { Button, Image } from '@/shared';

export const BlogSearchFormButton = () => {
  const isMobile = useIsMobile(810);
  const status = useFormStatus();

  return (
    <Button color="green" size="lg" className={styles.blogSearchButton} type="submit" disabled={status.pending}>
      {isMobile ? <Image src="/icons/search-v1.svg" alt="search" width={24} height={24} /> : 'Search'}
    </Button>
  );
};
