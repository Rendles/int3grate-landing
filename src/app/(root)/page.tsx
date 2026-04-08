import type { Metadata } from 'next';

import {
  FoundingPartners,
  Hero,
  MvpLoop,
  Problem,
  Roadmap,
  StackPosition,
  UnderTheHood,
  Vision
} from '@/components/home';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Int3grate is the control plane for your AI workforce — managed AI workers with domain isolation, durable approval checkpoints, and a built-in cost ledger. Built for SMBs that want AI in operations, not just in chat.'
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <MvpLoop />
      <Vision />
      <UnderTheHood />
      <Roadmap />
      <StackPosition />
      <FoundingPartners />
    </>
  );
}
