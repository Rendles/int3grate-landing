import clsx from 'clsx';

import { BlogCardSkeleton } from '../BlogCardSkeleton';
import { BlogGetLatestNewsSkeleton } from '../BlogGetLatestNewsSkeleton';

import styles from './style.module.css';

export const BlogPageSkeleton = () => {
  return (
    <div className={styles.blogPageSkeleton}>
      <div className={styles.blogPageSkeletonHeader}>
        <h2 className={styles.blogPageSkeletonTitle}>{'Blog'}</h2>
        <div className={clsx(styles.blogPageSkeletonSubtitle, styles.pulse)} />
      </div>

      <div className={clsx(styles.blogPageSkeletonSearchForm, styles.pulse)}>
        <div className={styles.blogPageSkeletonSearchFormInput} />
        <div className={styles.blogPageSkeletonSearchFormButton} />
      </div>

      <div className={clsx(styles.blogPageSkeletonTags, styles.pulse)}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((tag) => (
          <div className={styles.blogPageSkeletonTag} key={tag} />
        ))}
      </div>

      <div className={styles.blogPageSkeletonCards}>
        <div className={styles.blogPageSkeletonCardsTop}>
          <div className={styles.blogPageSkeletonCardsTwoCols}>
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>

          <div className={styles.blogPageSkeletonMostPopularContainer}>
            <div className={styles.blogPageSkeletonMostPopularHeader}>
              <p className={styles.blogPageSkeletonMostPopularTitle}>{'Most popular'}</p>
              <div className={clsx(styles.blogPageSkeletonMostPopularButton, styles.pulse)} />
            </div>

            <div className={styles.blogPageSkeletonCardsThreeCols}>
              <BlogCardSkeleton isMostPopular />
              <BlogCardSkeleton isMostPopular />
              <BlogCardSkeleton isMostPopular />
            </div>
          </div>
        </div>

        <div className={styles.blogPageSkeletonCardsTwoCols}>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>

        <div className={styles.blogPageSkeletonCardsThreeCols}>
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </div>

      <BlogGetLatestNewsSkeleton />
    </div>
  );
};
