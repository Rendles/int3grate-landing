import type { Metadata } from 'next';

import { POOLS_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export const metadata: Metadata = {
  title: 'Pools',
  robots: { index: false, follow: true }
};

export default function FaqPoolsPage() {
  return <Accordion data={POOLS_FAQS} />;
}
