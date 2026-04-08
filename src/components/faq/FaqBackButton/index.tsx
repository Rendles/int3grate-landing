'use client';
import { usePathname, useSearchParams } from 'next/navigation';

import { useIsMobile } from '@/hooks';
import { Button, Image, Link } from '@/shared';

export const FaqBackButton = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toString() ?? '';

  if (!isMobile) return null;

  if (pathname === '/faq' && !searchQuery) return null;

  return (
    <Link href="/faq">
      <Button size="icon" title="Faq back button">
        <Image src="/icons/chevron-left.svg" alt="Chevron left" width={24} height={24} />
      </Button>
    </Link>
  );
};
