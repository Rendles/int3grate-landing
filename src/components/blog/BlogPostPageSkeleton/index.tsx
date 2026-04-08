import clsx from 'clsx';

import { BlogGetLatestNewsSkeleton } from '../BlogGetLatestNewsSkeleton';

import styles from './style.module.css';

export const BlogPostPageSkeleton = () => {
  return (
    <div className={styles.blogPostPageSkeleton}>
      <div className={styles.blogPostPageHeader}>
        <div className={clsx(styles.blogPostPageSkeletonTitle, styles.pulse)} />

        <div className={styles.blogBackButtonContainer}>
          <div className={clsx(styles.blogPostPageSkeletonBackButton, styles.pulse)} />
        </div>
      </div>

      <div className={styles.blogPostDataContainer}>
        <div className={clsx(styles.blogPostData, styles.pulse)}>
          <div className={styles.blogPostPageSkeletonImageContainer}>
            <div className={styles.blogPostPageSkeletonImage} />
            <div className={styles.blogPostDataInfo}>
              <p className={styles.blogPostPageSkeletonInfoText} />

              <div className={styles.blogPostPageSkeletonIcons}>
                <div className={styles.blogPostPageSkeletonIcon} />
                <div className={styles.blogPostPageSkeletonIcon} />
              </div>
            </div>

            <div className={styles.blogPostPageSkeletonTags}>
              <div className={styles.blogPostPageSkeletonTag} />
              <div className={styles.blogPostPageSkeletonTag} />
              <div className={styles.blogPostPageSkeletonTag} />
            </div>
          </div>

          <div className={styles.blogPostPageSkeletonDescription}>
            {['100%', '100%', '50%', '50%', '100%', '100%', '50%', '50%', '100%', '100%'].map((maxWidth, index) => (
              <div key={index} className={styles.blogPostPageSkeletonDescriptionLine} style={{ maxWidth }} />
            ))}
          </div>
        </div>

        <div className={styles.blogPostPageSkeletonMostPopular}>
          <p className={styles.blogPostPageSkeletonMostPopularTitle}>Most Popular</p>

          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className={styles.blogPostPageSkeletonPopularCard}>
              <div className={clsx(styles.blogPostPageSkeletonPopularTitle, styles.pulse)} />
              <div className={clsx(styles.blogPostPageSkeletonPopularText, styles.pulse)} />

              <div className={styles.blogPostPageSkeletonPopularTags}>
                <div className={clsx(styles.blogPostPageSkeletonPopularTag)} />
                <div className={clsx(styles.blogPostPageSkeletonPopularTag)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BlogGetLatestNewsSkeleton />
    </div>
  );
};
