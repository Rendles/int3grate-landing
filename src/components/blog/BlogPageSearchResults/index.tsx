import { BlogCard } from '../BlogCard';

import styles from './style.module.css';

import { IBlogPostPopulated } from '@/types';
import { splitArrayIntoSubArrays } from '@/utils';

export const BlogPageSearchResults = ({ data }: { data: IBlogPostPopulated[] }) => {
  const subArrays = splitArrayIntoSubArrays<IBlogPostPopulated>(data);

  return (
    <div className={styles.blogPageSearchResults}>
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
  );
};
