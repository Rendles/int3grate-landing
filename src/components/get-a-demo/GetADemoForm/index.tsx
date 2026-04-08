'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './style.module.css';

import { sendData } from '@/axios';
import { Button, Image, Input, Textarea } from '@/shared';

export const GetADemoForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const router = useRouter();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    let filteredValue = value.replace(/[^0-9+]/g, '');

    if (filteredValue.includes('+')) {
      filteredValue = '+' + filteredValue.replace(/\+/g, '');
    }

    setFields({ ...fields, phone: filteredValue });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    const data = {
      name: fields.name,
      email: {
        email: fields.email,
        category: 'work'
      },
      phone_numbers: [
        {
          number: fields.phone,
          category: 'mobile'
        }
      ],
      details: fields.description,
      tags: ['Contact us']
    };

    try {
      await sendData(data);
      console.log('Form submitted successfully');
      router.push('/thanks-for-message');
    } catch (error) {
      setIsError(true);
      console.error('Form submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={styles.getADemoForm} id="get-a-demo-form" onSubmit={handleSubmit}>
      <p className={styles.getADemoFormText}>All fields marked with an asterisk (*) are required</p>
      <Input
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        label="Name *"
        id="name"
        autoComplete="name"
        type="text"
        name="name"
        value={fields.name}
        required
      />
      <Input
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        label="Email *"
        id="email"
        autoComplete="email"
        type="email"
        name="email"
        value={fields.email}
        required
      />
      <Input
        onChange={handlePhoneChange}
        id="get-a-demo-phone-number"
        label="Phone Number *"
        autoComplete="tel"
        type="tel"
        name="get-a-demo-phone-number"
        value={fields.phone}
        required
        pattern="^\+?[0-9]*$"
        inputMode="tel"
        maxLength={15}
      />
      <Textarea
        onChange={(e) => setFields({ ...fields, description: e.target.value })}
        label="Description *"
        id="description"
        name="description"
        required
        value={fields.description}
      />

      {isError && <p className={styles.getADemoFormError}>Something went wrong. Please try again.</p>}

      <Button color="white" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Contact Sales'}
        <Image src="/icons/arrow-right.svg" alt="Arrow right" width={25} height={25} />
      </Button>
    </form>
  );
};
