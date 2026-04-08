'use client';

import styles from './style.module.css';

import { Button, Image, Link } from '@/shared';

export const BlogBackButton = () => {
  return (
    <Link href="/blog">
      <Button size="icon" title="Blog back button" className={styles.blogBackButton}>
        <Image src="/icons/chevron-left.svg" alt="Chevron left" width={32} height={32} />
        <p className={styles.blogBackButtonText}>{'All Posts'}</p>
      </Button>
    </Link>
  );
};
