import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: string;
  id: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { className, id, label, ...rest } = props;
  return (
    <div className={styles.checkboxContainer}>
      {label && (
        <label className={styles.checkboxLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={clsx(styles.checkbox, className)} id={id} type="checkbox" {...rest} />
    </div>
  );
};
