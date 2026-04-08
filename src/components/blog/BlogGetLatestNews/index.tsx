import { BlogLatestNewsForm } from '../BlogLatestNewsForm';

import styles from './style.module.css';

export const BlogGetLatestNews = () => {
  return (
    <div className={styles.blogGetLatestNews}>
      <p className={styles.blogGetLatestNewsText}>
        Get the latest news from our blog <br />
        every month
      </p>
      <BlogLatestNewsForm />
    </div>
  );
};
