'use client';

import { FormEvent, useState } from 'react';
import clsx from 'clsx';

import { Button } from '../Button';

import styles from './style.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface EmailNotifyInputProps {
  id?: string;
  helperText?: string;
  className?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Tertiary email-notify input — spec §1.4 / §12.1.
 *
 * Single email field, single submit button, with idle/loading/success/error
 * state machine. Submits to a passive notify list (separate from the
 * founding cohort application pipeline). Used in two places: Hero (tertiary)
 * and Founding design partners (fallback).
 *
 * Color is intentionally distinct from the primary CTA per spec §3:
 * the secondary submit uses the outline `white` Button variant, not the
 * accent-filled `green` variant.
 */
export const EmailNotifyInput = ({ id = 'email-notify', helperText, className }: EmailNotifyInputProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (value: string) => {
    setEmail(value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error');
      setErrorMessage('Enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // TODO: wire to the notify-list backend before launch. This pipeline is
      // intentionally separate from the founding cohort application flow
      // (spec §12.1). No double opt-in for MVP launch — add later if needed.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <p className={clsx(styles.success, className)} role="status" aria-live="polite">
        {`Thanks — we'll let you know.`}
      </p>
    );
  }

  const errorId = `${id}-error`;

  return (
    <form onSubmit={handleSubmit} className={clsx(styles.form, className)} noValidate>
      {helperText && <p className={styles.helper}>{helperText}</p>}

      <div className={styles.row}>
        <label htmlFor={id} className={styles.visuallyHidden}>
          Work email
        </label>
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          placeholder="your@work.email"
          value={email}
          onChange={(event) => handleChange(event.target.value)}
          disabled={status === 'loading'}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? errorId : undefined}
          className={styles.input}
          required
        />
        <Button type="submit" color="white" size="sm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Notify me when MVP ships'}
        </Button>
      </div>

      {status === 'error' && (
        <p id={errorId} className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
