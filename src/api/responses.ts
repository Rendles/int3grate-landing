import { IBlogPostPopulated, IBlogTagPopulated } from '@/types';

export interface GetBlogPostsResponse {
  data: IBlogPostPopulated[];
  meta: IMeta;
}

export interface GetBlogTagsResponse {
  data: IBlogTagPopulated[];
  meta: IMeta;
}

interface IMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
