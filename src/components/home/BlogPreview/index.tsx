import { ArrowRight } from 'lucide-react';

import styles from './style.module.css';

import { Button, Link } from '@/shared';
import { IBlogPostPopulated } from '@/types';

interface BlogPreviewProps {
  posts: IBlogPostPopulated[];
}

export const BlogPreview = ({ posts }: BlogPreviewProps) => {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className={styles.section} aria-labelledby="blog-heading">
      <div className={styles.sectionInner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>FROM THE BLOG</span>
          <h2 id="blog-heading" className={styles.heading}>
            Ideas on AI, automation, and operations.
          </h2>
          <p className={styles.subheading}>
            Practical thinking on how growing companies adopt AI workflows — without losing control.
          </p>
        </header>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.documentId} className={styles.card}>
              {post.media && (
                <div className={styles.cardImageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.cardImage}
                    src={post.media.url}
                    alt={post.media.alternativeText ?? post.title}
                    width={post.media.width}
                    height={post.media.height}
                    loading="lazy"
                  />
                </div>
              )}

              <div className={styles.cardBody}>
                {post.tags.length > 0 && (
                  <div className={styles.cardTags}>
                    {post.tags.map((tag) => (
                      <span key={tag.id} className={styles.cardTag}>
                        {tag.title}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className={styles.cardTitle}>
                  <Link href={`/blog/${post.slug}`} className={styles.cardTitleLink}>
                    {post.title}
                  </Link>
                </h3>

                <p className={styles.cardDescription}>{post.description}</p>

                <div className={styles.cardMeta}>
                  <span>{post.author}</span>
                  <span className={styles.cardMetaDot} aria-hidden="true">
                    &middot;
                  </span>
                  <span>{post.read_time_mins} min read</span>
                  <span className={styles.cardMetaDot} aria-hidden="true">
                    &middot;
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href="/blog">
            <Button color="white" size="md">
              View all posts
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
