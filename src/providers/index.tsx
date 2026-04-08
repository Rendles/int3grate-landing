'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { defaultSystem } from '@chakra-ui/react';

import LenisProvider from '@/components/core/ReactLenis';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LenisProvider>
        <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
      </LenisProvider>
    </div>
  );
};
