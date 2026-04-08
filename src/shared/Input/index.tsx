import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  id: string;
}

export const Input = (props: InputProps) => {
  const { className, id, label, autoComplete = 'off', type = 'text', ...rest } = props;
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={clsx(styles.input, className)} id={id} autoComplete={autoComplete} type={type} {...rest} />
    </div>
  );
};
