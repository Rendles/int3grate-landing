import { BlogBackButton } from '../BlogBackButton';
import { BlogCard } from '../BlogCard';
import { BlogGetLatestNews } from '../BlogGetLatestNews';

import styles from './style.module.css';

import { api } from '@/api';
import { IBlogPostPopulated } from '@/types';
import { splitArrayIntoSubArrays } from '@/utils';

export const BlogMostPopularPageContent = async () => {
  const mostPopularBlogPosts = await api.getBlogPostsPopulated({ categoryName: 'most-popular' });
  const mostPopularBlogPostsSubArrays = splitArrayIntoSubArrays<IBlogPostPopulated>(mostPopularBlogPosts);

  return (
    <div className={styles.blogMostPopularPage}>
      <div className={styles.blogMostPopularPageHeader}>
        <h2 className={styles.blogMostPopularPageTitle}>{'🔥 Most Popular'}</h2>
        <div className={styles.blogBackButtonContainer}>
          <BlogBackButton />
        </div>
      </div>

      <div className={styles.blogMostPopularPageCards}>
        {mostPopularBlogPostsSubArrays.map((subArray, index) => {
          if (subArray.length === 2) {
            return (
              <div className={styles.blogMostPopularPageCardsTwoCols} key={index}>
                {subArray.map((post) => (
                  <BlogCard key={post.id} data={post} />
                ))}
              </div>
            );
          }
          return (
            <div className={styles.blogMostPopularPageCardsThreeCols} key={index}>
              {subArray.map((post) => (
                <BlogCard key={post.id} data={post} />
              ))}
            </div>
          );
        })}
      </div>

      <BlogGetLatestNews />
    </div>
  );
};
