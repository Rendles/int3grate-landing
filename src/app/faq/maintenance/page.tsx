import type { Metadata } from 'next';

import { MAINTENANCE_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export const metadata: Metadata = {
  title: 'Maintenance',
  robots: { index: false, follow: true }
};

export default function FaqMaintenancePage() {
  return <Accordion data={MAINTENANCE_FAQS} />;
}
