import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'white' | 'black' | 'green' | 'grey';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { color, size = 'md', className, children, fullWidth = false, ...rest } = props;

  return (
    <button
      className={clsx(styles.button, color && styles[color], styles[size], fullWidth && styles.fullWidth, className)}
      {...rest}>
      {children}
    </button>
  );
};
