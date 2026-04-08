import { FaqSearchResult } from '..';
import { NoResultsFound } from '..';

export const FaqSearchResultWrapper = ({
  children,
  searchResult,
  searchQuery
}: {
  children: React.ReactNode;
  searchResult: { title: string; content: string }[];
  searchQuery: string;
}) => {
  if (searchResult.length && searchQuery) {
    return <FaqSearchResult data={searchResult} />;
  }

  if (!searchResult.length && searchQuery) {
    return <NoResultsFound />;
  }

  return children;
};
