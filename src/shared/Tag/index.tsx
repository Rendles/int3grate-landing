import { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

type TagVariant = 'live' | 'next' | 'later';

interface TagProps extends ComponentPropsWithoutRef<'span'> {
  variant: TagVariant;
  children?: ReactNode;
}

const DEFAULT_LABEL: Record<TagVariant, string> = {
  live: 'Live in MVP',
  next: 'Next',
  later: 'Later'
};

/**
 * Roadmap tag — small inline pill used to mark feature mentions with the
 * three locked roadmap states from the spec (§1.6). Distinct color per
 * variant; same variant always uses the same color across the page so the
 * reader can scan by hue. Default label matches the spec wording but can be
 * overridden via children when the surrounding copy requires it.
 *
 * Text inside the tag carries the meaning — color is never the only signal
 * (spec §12.7 accessibility note).
 */
export const Tag = ({ variant, className, children, ...rest }: TagProps) => {
  return (
    <span className={clsx(styles.tag, styles[variant], className)} {...rest}>
      {children ?? DEFAULT_LABEL[variant]}
    </span>
  );
};
