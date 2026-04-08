import { Accordion } from '@/shared';

interface FaqSearchResultProps {
  data: {
    title: string;
    content: string;
  }[];
}

export const FaqSearchResult = ({ data }: FaqSearchResultProps) => {
  return <Accordion data={data} />;
};
