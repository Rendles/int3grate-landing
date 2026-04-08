import clsx from 'clsx';

import styles from './style.module.css';

export const BlogGetLatestNewsSkeleton = () => {
  return (
    <div className={clsx(styles.blogGetLatestNewsSkeleton, styles.pulse)}>
      <div className={styles.blogGetLatestNewsSkeletonText} />

      <div className={styles.blogGetLatestNewsSkeletonButtons}>
        <div className={styles.blogGetLatestNewsSkeletonButton} />
        <div className={styles.blogGetLatestNewsSkeletonButton} />
      </div>
    </div>
  );
};
