import { BlogPageCards } from '../BlogPageCards';
import { BlogPageSearchResults } from '../BlogPageSearchResults';

import { NoResultsFound } from '@/components/faq';
import { IBlogPostPopulated } from '@/types';

export const BlogPageSearchResultsContainer = ({
  data,
  searchParam,
  tagsParam
}: {
  data: IBlogPostPopulated[];
  searchParam: string | string[] | undefined;
  tagsParam: string | string[] | undefined;
}) => {
  if (!data.length) {
    return <NoResultsFound />;
  }

  if (data.length && (!!searchParam || !!tagsParam)) {
    return <BlogPageSearchResults data={data} />;
  }

  return <BlogPageCards data={data} />;
};
