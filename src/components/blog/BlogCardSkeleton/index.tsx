import clsx from 'clsx';

import styles from './style.module.css';

export const BlogCardSkeleton = ({ isMostPopular = false }: { isMostPopular?: boolean }) => {
  return (
    <div className={clsx(styles.blogCardSkeleton, isMostPopular && styles.isMostPopular, styles.pulse)}>
      <div className={styles.blogCardSkeletonImage} />

      <div className={clsx(styles.blogCardSkeletonMostPopularTitle, isMostPopular && styles.isMostPopular)}>
        <div className={styles.blogCardSkeletonDescriptionLine} />
        <div className={styles.blogCardSkeletonDescriptionLine} />
      </div>

      <div className={styles.blogCardSkeletonHeader}>
        <div className={styles.blogCardSkeletonHeaderText} />

        <div className={styles.blogCardSkeletonButtons}>
          <div className={styles.blogCardSkeletonButton} />
          <div className={styles.blogCardSkeletonButton} />
        </div>
      </div>

      <div className={styles.blogCardSkeletonDescription}>
        <div className={styles.blogCardSkeletonDescriptionLine} />
        <div className={styles.blogCardSkeletonDescriptionLine} />
        <div className={styles.blogCardSkeletonDescriptionLine} />
        <div className={styles.blogCardSkeletonDescriptionLine} />
        <div className={styles.blogCardSkeletonDescriptionLine} />
      </div>

      <div className={styles.blogCardSkeletonTags}>
        <div className={styles.blogCardSkeletonTag} />
        <div className={styles.blogCardSkeletonTag} />
      </div>
    </div>
  );
};
