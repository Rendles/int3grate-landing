'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FaqBackButton, FaqSearchForm, FaqSearchResultWrapper } from '..';

import styles from './style.module.css';

import { FAQS } from '@/constants/constants';

export const FaqLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchQuery = searchParams.get('search')?.toString() ?? '';
  const [search, setSearch] = useState<string>(searchQuery);
  const [searchResult, setSearchResult] = useState<{ title: string; content: string }[]>([]);

  const setSearchParams = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleClick = () => {
    setSearchParams(search);
    const result = FAQS.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResult(result);
  };

  const handleSearch = (term: string) => setSearch(term);

  useEffect(() => {
    if (search) handleClick();
  }, []);

  return (
    <div className={styles.faqLayout}>
      <div className={styles.faqHeader}>
        <div className={styles.faqBackButtonContainer}>
          <FaqBackButton />
        </div>

        <h2 className={styles.faqLayoutTitle}>FAQ</h2>

        <p className={styles.faqLayoutSubtitle}>Subtitle placeholder</p>
      </div>

      <FaqSearchForm onChange={handleSearch} value={search} onClick={handleClick} />

      <FaqSearchResultWrapper searchResult={searchResult} searchQuery={searchQuery}>
        {children}
      </FaqSearchResultWrapper>
    </div>
  );
};
