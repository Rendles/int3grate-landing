import type { Metadata } from 'next';

import { MINERS_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export const metadata: Metadata = {
  title: 'Miners'
};

export default function FaqMinersPage() {
  return <Accordion data={MINERS_FAQS} />;
}
