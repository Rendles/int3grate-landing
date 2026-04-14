import type { Metadata } from 'next';
import Script from 'next/script';

import {
  BlogPreview,
  Contact,
  ControlPanel,
  Faq,
  Hero,
  Process,
  Solutions,
  WhyIntegrate,
  WorkWithUs
} from '@/components/home';
import { MOCK_BLOG_POSTS } from '@/components/home/BlogPreview/mock-posts';
import { FAQ_JSONLD } from '@/components/home/Faq';

export const metadata: Metadata = {
  title: 'Int3grate.ai — Agentic AI integration for real business operations',
  description:
    'Int3grate.ai designs and deploys practical AI workflows for growing companies. Automate execution across sales, admin, and operations while keeping humans in control.',
  openGraph: {
    title: 'Int3grate.ai — Agentic AI integration for real business operations',
    description:
      'Practical AI workflows for growing companies. Automate sales, admin, and operations while keeping humans in control.',
    type: 'website'
  },
  twitter: {
    title: 'Int3grate.ai — Agentic AI integration for real business operations',
    description:
      'Practical AI workflows for growing companies. Automate sales, admin, and operations while keeping humans in control.'
  }
};

export default function HomePage() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
        strategy="beforeInteractive"
      />
      <Hero />
      <WhyIntegrate />
      <Solutions />
      <ControlPanel />
      <Process />
      <Faq />
      <WorkWithUs />
      <Contact />
      <BlogPreview posts={MOCK_BLOG_POSTS} />
    </>
  );
}
