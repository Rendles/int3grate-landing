import { BlogBackButton } from '../BlogBackButton';
import { BlogCardButtons } from '../BlogCardButtons';
import { BlogCardShort } from '../BlogCardShort';
import { BlogGetLatestNews } from '../BlogGetLatestNews';
import { BlogMedia } from '../BlogMedia';
import { BlogTag } from '../BlogTag';

import styles from './style.module.css';

import { api } from '@/api';
import { MarkdownViewer } from '@/components/core';
import { Divider } from '@/shared';

interface BlogPostPageContentProps {
  params: Promise<{ slug: string }>;
}

export async function BlogPostPageContent({ params }: BlogPostPageContentProps) {
  const slug = (await params).slug;

  const [blogPostData, mostPopularBlogPosts] = await Promise.all([
    await api.getBlogPostBySlugPopulated(slug),
    await api.getBlogPostsPopulated({ categoryName: 'most-popular' })
  ]);

  const { title, description, author, read_time_mins, date, tags } = blogPostData;

  return (
    <div className={styles.blogPostPage}>
      <div className={styles.blogPostPageHeader}>
        <h2 className={styles.blogPostPageTitle}>{title}</h2>
        <div className={styles.blogBackButtonContainer}>
          <BlogBackButton />
        </div>
      </div>

      <div className={styles.blogPostDataContainer}>
        <div className={styles.blogPostData}>
          <div className={styles.blogPostDataImageContainer}>
            <div className={styles.blogPostDataImageContainerBlogMedia}>
              <BlogMedia
                media={blogPostData.media}
                youtubeLink={blogPostData.youtube_link}
                title={blogPostData.title}
              />
            </div>

            <div className={styles.blogPostDataInfo}>
              <p className={styles.blogPostDataInfoText}>
                {author}
                <Divider />
                {`${read_time_mins} min read`}
                <Divider />
                {date}
              </p>

              <BlogCardButtons link={`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/blog/${slug}`} />
            </div>

            <div className={styles.blogPostDataTags}>
              {tags.map((tag) => (
                <BlogTag key={tag.id} tag={tag.title} />
              ))}
            </div>
          </div>

          <div className={styles.blogPostPageDescription}>
            <MarkdownViewer markdown={description} />
          </div>
        </div>

        <div className={styles.blogPostPageMostPopular}>
          <p className={styles.blogPostPageMostPopularTitle}>Most Popular</p>
          {mostPopularBlogPosts.map((post) => (
            <BlogCardShort key={post.id} data={post} />
          ))}
        </div>
      </div>

      <BlogGetLatestNews />
    </div>
  );
}
