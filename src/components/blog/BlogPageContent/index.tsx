import { BlogPageSearchForm } from '../BlogPageSearchForm';
import { BlogPageSearchResultsContainer } from '../BlogPageSearchResultsContainer';

import styles from './style.module.css';

import { api } from '@/api';

export const BlogPageContent = async ({
  searchParam,
  tagsParam
}: {
  searchParam: string | string[] | undefined;
  tagsParam: string | string[] | undefined;
}) => {
  const data = await api.getBlogPostsPopulated({ search: searchParam, tags: tagsParam });
  return (
    <div className={styles.blogPage}>
      <div className={styles.blogPageHeader}>
        <h2 className={styles.blogPageTitle}>Blog</h2>
        <p className={styles.blogPageSubtitle}>Subtitle placeholder</p>
      </div>
      <BlogPageSearchForm tagsParam={tagsParam} />
      <BlogPageSearchResultsContainer data={data} searchParam={searchParam} tagsParam={tagsParam} />
    </div>
  );
};
