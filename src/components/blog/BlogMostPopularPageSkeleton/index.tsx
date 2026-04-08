import clsx from 'clsx';

import { BlogCardSkeleton } from '../BlogCardSkeleton';
import { BlogGetLatestNewsSkeleton } from '../BlogGetLatestNewsSkeleton';

import styles from './style.module.css';

export const BlogMostPopularPageSkeleton = () => {
  return (
    <div className={styles.blogMostPopularPageSkeleton}>
      <div className={styles.blogMostPopularPageSkeletonHeader}>
        <h2 className={styles.blogMostPopularPageSkeletonTitle}>{'🔥 Most Popular'}</h2>
        <div className={styles.blogBackButtonContainer}>
          <div className={clsx(styles.blogBackButton, styles.pulse)} />
        </div>
      </div>

      <div className={styles.blogMostPopularPageSkeletonCards}>
        <div className={styles.blogMostPopularPageSkeletonCardsTwoCols}>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>

        <div className={styles.blogMostPopularPageSkeletonCardsThreeCols}>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>

        <div className={styles.blogMostPopularPageSkeletonCardsTwoCols}>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </div>

      <BlogGetLatestNewsSkeleton />
    </div>
  );
};
