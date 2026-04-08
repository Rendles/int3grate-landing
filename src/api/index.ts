import axios, { AxiosInstance } from 'axios';

import { GetBlogPostsResponse, GetBlogTagsResponse } from './responses';

class Api {
  private readonly client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
    this.client.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  async get<Response = unknown>(url: string, params?: Record<string, unknown>) {
    return (await this.client.get<Response>(url, { params })).data;
  }

  post<Body = Record<string, unknown>>(url: string, body: Body, params?: Record<string, unknown>) {
    return this.client.post(url, body, { params });
  }

  delete(url: string) {
    return this.client.delete(url);
  }

  async getBlogPostsPopulated(params?: {
    search?: string | string[];
    tags?: string | string[];
    categoryName?: 'regular' | 'most-popular';
    page?: number;
    pageSize?: number;
  }) {
    return (
      await this.get<GetBlogPostsResponse>('blogs', {
        filters: {
          category: { name: { $eq: params?.categoryName } },
          tags: { title: { $in: params?.tags } },
          $or: [
            {
              title: { $containsi: params?.search }
            },
            {
              description: { $containsi: params?.search }
            }
          ]
        },
        pagination: { page: params?.page, pageSize: params?.pageSize },
        populate: '*'
      })
    ).data;
  }

  async getBlogPostBySlugPopulated(slug: string) {
    return (
      await this.get<GetBlogPostsResponse>('blogs', {
        filters: { slug: { $eq: slug } },
        populate: '*'
      })
    ).data[0];
  }

  async getBlogTagsPopulated() {
    return (await this.get<GetBlogTagsResponse>('tags', { populate: '*' })).data;
  }
}

export const api = new Api(`${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:1337'}/api`);
