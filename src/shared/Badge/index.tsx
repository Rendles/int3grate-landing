import { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

type BadgeTone = 'neutral' | 'info' | 'success' | 'warning';

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  tone?: BadgeTone;
  children: ReactNode;
}

/**
 * Status badge — pill, muted background, never the same color as the
 * primary CTA. For multi-segment badges (e.g. the hero "Building in the open
 * · Public launch mid-2026 · Founding cohort forming now") render multiple
 * Badge children inside a single wrapping container with a separator.
 */
export const Badge = ({ tone = 'neutral', className, children, ...rest }: BadgeProps) => {
  return (
    <span className={clsx(styles.badge, styles[tone], className)} {...rest}>
      {children}
    </span>
  );
};
