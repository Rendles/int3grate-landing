'use client';

import clsx from 'clsx';

import styles from './style.module.css';

import { Image, Link } from '@/shared';
import { IBlogPostPopulated } from '@/types';

interface BlogMediaProps {
  media?: IBlogPostPopulated['media'];
  youtubeLink?: string;
  title: string;
  link?: string;
  className?: string;
}

const getEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : '';
};

export const BlogMedia = ({ media, youtubeLink, title, link, className }: BlogMediaProps) => {
  const mediaSrc = media?.url ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:1337'}${media.url}` : '';

  if (youtubeLink) {
    return (
      <div className={clsx(styles.video, className)}>
        <iframe
          src={getEmbedUrl(youtubeLink)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    );
  }

  if (media && media.mime.includes('image')) {
    const image = (
      <Image
        className={styles.image}
        src={mediaSrc}
        alt={media.alternativeText ?? media.name ?? 'Blog image'}
        width={media.width}
        height={media.height}
      />
    );

    return link ? (
      <Link href={link} className={className}>
        {image}
      </Link>
    ) : (
      image
    );
  }

  return null;
};
