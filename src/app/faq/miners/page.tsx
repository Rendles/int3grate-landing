import type { Metadata } from 'next';

import { MINERS_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export const metadata: Metadata = {
  title: 'Miners',
  robots: { index: false, follow: true }
};

export default function FaqMinersPage() {
  return <Accordion data={MINERS_FAQS} />;
}
