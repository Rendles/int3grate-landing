import { BlogCard } from '../BlogCard';
import { BlogGetLatestNews } from '../BlogGetLatestNews';
import { BlogPageMostPopular } from '../BlogPageMostPopular';

import styles from './style.module.css';

import { api } from '@/api';
import { IBlogPostPopulated } from '@/types';
import { splitArrayIntoSubArrays } from '@/utils';

export const BlogPageCards = async ({ data }: { data: IBlogPostPopulated[] }) => {
  const mostPopularBlogPostsShort = await api.getBlogPostsPopulated({
    categoryName: 'most-popular',
    page: 1,
    pageSize: 3
  });

  const [first, second, ...rest] = data;
  const firstTwoCards = [first, second].filter((card) => card !== undefined);
  const subArrays = splitArrayIntoSubArrays<IBlogPostPopulated>(rest);

  return (
    <div className={styles.blogPageCardsContainer}>
      <div className={styles.blogPageCards}>
        <div className={styles.blogPageCardsTop}>
          {!!firstTwoCards.length && (
            <div className={styles.blogPageCardsTwoCols}>
              {firstTwoCards.map((post) => (
                <BlogCard key={post.id} data={post} />
              ))}
            </div>
          )}

          <BlogPageMostPopular data={mostPopularBlogPostsShort} />
        </div>

        <div className={styles.blogPageCardsBottom}>
          {subArrays.map((subArray, index) => {
            if (subArray.length === 2) {
              return (
                <div className={styles.blogPageCardsTwoCols} key={index}>
                  {subArray.map((post) => (
                    <BlogCard key={post.id} data={post} />
                  ))}
                </div>
              );
            }
            return (
              <div className={styles.blogPageCardsThreeCols} key={index}>
                {subArray.map((post) => (
                  <BlogCard key={post.id} data={post} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <BlogGetLatestNews />
    </div>
  );
};
