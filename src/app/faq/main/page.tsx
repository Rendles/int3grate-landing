import { MAIN_FAQS } from '@/constants/constants';
import { Accordion } from '@/shared';

export default function FaqMainPage() {
  return <Accordion data={MAIN_FAQS} />;
}
