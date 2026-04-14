import { IBlogPostPopulated } from '@/types';

const NOW = '2026-04-14T10:00:00.000Z';

const makeCategory = (name: 'regular' | 'most-popular' = 'regular') => ({
  id: 1,
  documentId: `cat-${name}`,
  name,
  createdAt: NOW,
  updatedAt: NOW,
  publishedAt: NOW
});

const makeTag = (id: number, title: string) => ({
  id,
  documentId: `tag-${id}`,
  title,
  createdAt: NOW,
  updatedAt: NOW,
  publishedAt: NOW
});

/**
 * Mock blog posts for the homepage preview section.
 *
 * Each entry follows the `IBlogPostPopulated` shape returned by
 * `api.getBlogPostsPopulated()`, so swapping to live Strapi data
 * later requires only changing the data source — no component changes.
 *
 * Media is omitted (optional field) — the card component handles
 * the no-image case with a placeholder.
 */
export const MOCK_BLOG_POSTS: IBlogPostPopulated[] = [
  {
    id: 1,
    documentId: 'post-1',
    title: 'Why most AI automation pilots fail — and what to do instead',
    description:
      'Companies rush to adopt AI agents without mapping the workflows those agents are supposed to improve. The result: demos that impress, rollouts that stall, and teams that lose trust in automation before it delivers anything. We break down the three most common failure modes and explain how a workflow-first approach changes the outcome.',
    read_time_mins: 6,
    author: 'Int3grate Team',
    date: '2026-04-10',
    createdAt: NOW,
    updatedAt: NOW,
    publishedAt: NOW,
    slug: 'why-ai-automation-pilots-fail',
    category: makeCategory('regular'),
    tags: [makeTag(1, 'AI Strategy'), makeTag(2, 'Workflows')]
  },
  {
    id: 2,
    documentId: 'post-2',
    title: 'Human-in-the-loop is not a limitation — it is the product',
    description:
      'Approval checkpoints are often treated as a concession to cautious leadership. In practice, they are the feature that makes AI safe enough to deploy across finance, HR, and client-facing operations. This post explains how durable approval layers turn risky automations into trusted business processes.',
    read_time_mins: 5,
    author: 'Int3grate Team',
    date: '2026-04-03',
    createdAt: NOW,
    updatedAt: NOW,
    publishedAt: NOW,
    slug: 'human-in-the-loop-is-the-product',
    category: makeCategory('regular'),
    tags: [makeTag(3, 'Approvals'), makeTag(4, 'Operations')]
  },
  {
    id: 3,
    documentId: 'post-3',
    title: 'Measuring AI ROI beyond "hours saved"',
    description:
      'Hours saved is the most common metric teams track when deploying AI workflows — and the least useful on its own. Real ROI includes reduced error rates, faster cycle times, lower context-switching costs, and the compound effect of consistent execution. Here is a framework for measuring what actually matters.',
    read_time_mins: 7,
    author: 'Int3grate Team',
    date: '2026-03-27',
    createdAt: NOW,
    updatedAt: NOW,
    publishedAt: NOW,
    slug: 'measuring-ai-roi-beyond-hours-saved',
    category: makeCategory('regular'),
    tags: [makeTag(5, 'ROI'), makeTag(1, 'AI Strategy')]
  }
];
