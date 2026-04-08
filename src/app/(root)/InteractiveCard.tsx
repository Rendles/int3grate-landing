'use client';

import { PropsWithChildren, useRef } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

type InteractiveCardProps = PropsWithChildren<{
  className?: string;
}>;

export function InteractiveCard({ className, children }: InteractiveCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    const rotateX = -((y - rect.height / 2) / rect.height) * 12;

    card.style.setProperty('--mouse-x', `${xPercent}%`);
    card.style.setProperty('--mouse-y', `${yPercent}%`);
    card.style.setProperty('--tilt-x', `${rotateX}deg`);
    card.style.setProperty('--tilt-y', `${rotateY}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
  };

  return (
    <article
      ref={cardRef}
      className={clsx(styles.interactiveCard, className)}
      onMouseMove={handleMove}
      onMouseEnter={handleMove}
      onMouseLeave={handleLeave}>
      {children}
    </article>
  );
}
