'use client';

import styles from './style.module.css';

import { Button, Image, Link } from '@/shared';

interface BlogErrorProps {
  reset: () => void;
}

export const BlogError = ({ reset }: BlogErrorProps) => {
  return (
    <div className={styles.blogError}>
      <div className={styles.blogErrorContent}>
        <Image
          src="/icons/document-close.svg"
          alt="document-close"
          width={64}
          height={64}
          className={styles.blogErrorImage}
        />

        <div className={styles.blogErrorTextContainer}>
          <h4 className={styles.blogErrorTextTitle}>{'Oops! Something went wrong.'}</h4>
          <p className={styles.blogErrorTextDescription}>
            {"We couldn't load the blog posts. Please try refreshing the page or come back later."}
          </p>
        </div>

        <div className={styles.blogErrorButtons}>
          <Button onClick={() => reset()} color="green" fullWidth>
            {'Try again'}
          </Button>

          <Button fullWidth>
            <Link href="/">
              <span className="gradient-color">{'Back to Home'}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
