'use client';

import React, { JSX, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = '100%' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [clipping, setClipping] = React.useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start('visible').then(() => setClipping(false));
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'visible' }}>
      <motion.div
        style={{ overflow: clipping ? 'hidden' : 'visible' }}
        variants={{
          hidden: { opacity: 0, y: 250 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};
