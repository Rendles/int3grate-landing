import Form from 'next/form';

import { BlogSearchFormButton } from '../BlogSearchFormButton';

import styles from './style.module.css';

import { api } from '@/api';
import { Checkbox, Input } from '@/shared';

export const BlogPageSearchForm = async ({ tagsParam }: { tagsParam: string | string[] | undefined }) => {
  const data = await api.getBlogTagsPopulated();

  return (
    <Form className={styles.blogSearchForm} action="/blog">
      <div className={styles.blogSearch}>
        <Input className={styles.blogSearchFormInput} id="blog-search" name="search" placeholder="Search" />
        <BlogSearchFormButton />
      </div>

      <div className={styles.blogPageTags}>
        {data.map(({ id, title }) => (
          <Checkbox
            key={id}
            id={id.toString()}
            label={title}
            name="tags"
            value={title}
            defaultChecked={tagsParam?.includes(title)}
          />
        ))}
      </div>
    </Form>
  );
};
