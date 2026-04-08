import { BlogCard } from '../BlogCard';

import styles from './style.module.css';

import { Image, Link } from '@/shared';
import { IBlogPostPopulated } from '@/types';

export const BlogPageMostPopular = ({ data }: { data: IBlogPostPopulated[] }) => {
  if (!data.length) {
    return null;
  }

  return (
    <div className={styles.blogPageMostPopularContainer}>
      <div className={styles.blogMostPopular}>
        <p className={styles.blogMostPopularTitle}>{`🔥 Most Popular`}</p>
        <Link href="/blog/most-popular">
          <p className={styles.blogMostPopularSeeAll}>
            {`See All`}
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              width={24}
              height={24}
              className={styles.blogMostPopularSeeAllIcon}
            />
          </p>
        </Link>
      </div>

      <div className={styles.blogPageMostPopular}>
        {data.map((post) => (
          <BlogCard key={post.id} data={post} isMostPopular />
        ))}
      </div>
    </div>
  );
};
