import { useEffect, useState } from 'react';

export function useIsMobile(breakPoint?: number) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const MOBILE_BREAKPOINT = breakPoint ?? 810;

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mediaQueryList.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mediaQueryList.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}
