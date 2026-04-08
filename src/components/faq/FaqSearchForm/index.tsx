'use client';

import styles from './style.module.css';

import { useIsMobile } from '@/hooks';
import { Button, Image, Input } from '@/shared';

interface FaqSearchFormProps {
  onChange: (value: string) => void;
  value: string;
  onClick: () => void;
}

export const FaqSearchForm = ({ onChange, value, onClick }: FaqSearchFormProps) => {
  const isTablet = useIsMobile(1439);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <form className={styles.faqSearch} onSubmit={handleSubmit}>
      <Input
        className={styles.faqSearchInput}
        placeholder="Search"
        id="faq-search"
        onChange={handleChange}
        value={value}
      />
      <Button color="green" size="lg" className={styles.faqSearchButton} type="submit">
        {isTablet ? <Image src="/icons/search-v1.svg" alt="search" width={24} height={24} /> : 'Search'}
      </Button>
    </form>
  );
};
