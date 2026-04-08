'use client';

import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1,
        smoothWheel: true
      }}>
      {children}
    </ReactLenis>
  );
}
