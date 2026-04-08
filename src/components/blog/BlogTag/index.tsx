import styles from './style.module.css';

export const BlogTag = ({ tag }: { tag: string }) => {
  return <div className={styles.blogTag}>{tag}</div>;
};
