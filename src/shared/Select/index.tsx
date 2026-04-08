import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

import styles from './style.module.css';

import { ISelectOption } from '@/types';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label: string;
  options: ISelectOption[];
  disabledKeys?: string[];
}

export const Select = (props: SelectProps) => {
  const { label, options, className, id, disabledKeys, ...rest } = props;

  return (
    <div className={styles.selectContainer}>
      <label className={styles.selectLabel} htmlFor={id}>
        {label}
      </label>
      <select className={clsx(styles.select, className)} id={id} {...rest}>
        {options.map((option) => (
          <option
            className={styles.option}
            key={option.key}
            value={option.key}
            disabled={disabledKeys ? disabledKeys.includes(option.key) : false}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
