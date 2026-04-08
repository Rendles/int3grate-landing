import clsx from 'clsx';

import { BlogCardButtons } from '../BlogCardButtons';
import { BlogMedia } from '../BlogMedia';
import { BlogTag } from '../BlogTag';

import styles from './style.module.css';

import { MarkdownViewer } from '@/components/core';
import { Divider, Link } from '@/shared';
import { IBlogPostPopulated } from '@/types';

interface IBlogCardProps {
  data: IBlogPostPopulated;
  isMostPopular?: boolean;
}

export const BlogCard = ({ data, isMostPopular = false }: IBlogCardProps) => {
  const { title, description, author, read_time_mins, date, slug, tags } = data;

  const link = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/blog/${slug}`;

  return (
    <div className={clsx(styles.blogCard, isMostPopular && styles.blogCardMostPopular)}>
      <BlogMedia
        className={styles.blogCardMedia}
        media={data.media}
        youtubeLink={data.youtube_link}
        title={data.title}
        link={link}
      />

      <div className={styles.blogCardHeader}>
        <p className={styles.blogCardHeaderText}>
          {author}
          <Divider />
          {`${read_time_mins} min read`}
          <Divider />
          {date}
        </p>

        <div className={styles.blogCardButtonsContainer}>
          <BlogCardButtons link={link} />
        </div>
      </div>

      <div className={styles.blogCardContent}>
        <div className={styles.blogCardContentHeader}>
          <Link href={link}>
            <h6>{title}</h6>
          </Link>

          <div className={styles.blogCardDescription}>
            <MarkdownViewer markdown={description} />
          </div>
        </div>

        <div className={styles.blogCardTags}>
          {tags.map((tag) => (
            <BlogTag key={tag.id} tag={tag.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
