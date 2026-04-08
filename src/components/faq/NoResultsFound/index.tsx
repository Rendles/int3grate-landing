import styles from './style.module.css';

import { Image } from '@/shared';

export const NoResultsFound = () => {
  return (
    <div className={styles.noResultsFound}>
      <Image
        src="/icons/search-v2.svg"
        alt="no results found"
        className={styles.noResultsFoundIcon}
        width={64}
        height={64}
      />
      <h4 className={styles.noResultsFoundTitle}>No results found</h4>
      <p className={styles.noResultsFoundDescription}>
        Try searching with different keywords or explore our main categories
      </p>
    </div>
  );
};
