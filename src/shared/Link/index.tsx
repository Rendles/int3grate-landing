import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import styles from './style.module.css';

interface LinkProps extends NextLinkProps {
  className?: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export function Link(props: LinkProps) {
  const { href, className, children, target, ...rest } = props;
  return (
    <NextLink className={clsx(styles.link, className)} href={href} target={target} {...rest}>
      {children}
    </NextLink>
  );
}
