import { BlogTag } from '../BlogTag';

import styles from './style.module.css';

import { Divider, Link } from '@/shared';
import { IBlogPostPopulated } from '@/types';

export const BlogCardShort = ({ data }: { data: IBlogPostPopulated }) => {
  const { author, read_time_mins, date, title, tags } = data;
  const link = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/blog/${data.slug}`;

  return (
    <Link href={link}>
      <div className={styles.blogCardShort}>
        <h6 className={styles.blogCardShortTitle}>{title}</h6>

        <p className={styles.blogCardShortInfo}>
          {author}
          <Divider />
          {`${read_time_mins} min read`}
          <Divider />
          {date}
        </p>

        <div className={styles.blogCardShortTags}>
          {tags.map((tag) => (
            <BlogTag key={tag.id} tag={tag.title} />
          ))}
        </div>
      </div>
    </Link>
  );
};
