import { ComponentPropsWithoutRef } from 'react';

import styles from './style.module.css';

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  id: string;
}

export const Textarea = (props: TextareaProps) => {
  const { label, id, ...rest } = props;

  return (
    <div className={styles.textareaContainer}>
      <label className={styles.textareaLabel} htmlFor={id}>
        {label}
      </label>
      <textarea className={styles.textarea} id={id} {...rest} />
    </div>
  );
};
