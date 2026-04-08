export interface ISelectOption {
  key: string;
  label: string;
}

export interface IBlogTag {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface IBlogTagPopulated extends IBlogTag {
  blogs: IBlogPost[];
}

export interface IBlogPost {
  id: number;
  documentId: string;
  title: string;
  description: string;
  read_time_mins: number;
  author: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  youtube_link?: string;
}

export interface IBlogPostPopulated extends IBlogPost {
  media?: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  category: {
    id: number;
    documentId: string;
    name: 'regular' | 'most-popular';
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  tags: IBlogTag[];
}
