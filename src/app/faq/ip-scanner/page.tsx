import type { Metadata } from 'next';

import { IP_SCANNER_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export const metadata: Metadata = {
  title: 'IP Scanner',
  robots: { index: false, follow: true }
};

export default function FaqIpScannerPage() {
  return <Accordion data={IP_SCANNER_FAQS} />;
}
