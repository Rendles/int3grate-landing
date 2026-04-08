'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from './style.module.css';

import { sendData } from '@/axios';
import { Button, Image, Input, Select } from '@/shared';

const ID_OPTIONS = {
  socials: 1976930,
  conferences: 1976931,
  friends: 1976932,
  other: 1976933
};

const HOW_DID_YOU_HEAR_ABOUT_US_OPTIONS: { key: keyof typeof ID_OPTIONS; label: string }[] = [
  {
    key: 'socials',
    label: 'Socials'
  },
  {
    key: 'conferences',
    label: 'Conferences'
  },
  {
    key: 'friends',
    label: 'Friends'
  },
  {
    key: 'other',
    label: 'Other'
  }
];

export const BecomeAnEarlyAdopterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fields, setFields] = useState<{
    companyName: string;
    name: string;
    email: string;
    phone: string;
    amountOfMiners: string;
    amountOfMegawatts: string;
    howDidYouHearAboutUs: (typeof HOW_DID_YOU_HEAR_ABOUT_US_OPTIONS)[number]['key'] | '';
  }>({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    amountOfMiners: '',
    amountOfMegawatts: '',
    howDidYouHearAboutUs: ''
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
      company_name: fields.companyName,
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
      tags: ['Become beta user'],
      custom_fields: [
        {
          custom_field_definition_id: 673371,
          value: fields.amountOfMegawatts
        },
        {
          custom_field_definition_id: 673373,
          value: fields.howDidYouHearAboutUs ? ID_OPTIONS[fields.howDidYouHearAboutUs] : ''
        },
        {
          custom_field_definition_id: 673370,
          value: fields.amountOfMiners
        }
      ]
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
    <form className={styles.becomeAnEarlyAdopterForm} onSubmit={handleSubmit}>
      <p className={styles.becomeAnEarlyAdopterFormText}>All fields marked with an asterisk (*) are required</p>
      <Input
        type="text"
        id="name"
        label="Name *"
        name="name"
        autoComplete="name"
        value={fields.name}
        onChange={(e) => setFields({ ...fields, name: e.target.value })}
        required
      />
      <Input
        type="email"
        id="email"
        label="Email *"
        name="email"
        autoComplete="email"
        value={fields.email}
        onChange={(e) => setFields({ ...fields, email: e.target.value })}
        required
      />
      <Input
        type="text"
        id="company-name"
        label="Company Name *"
        name="company-name"
        autoComplete="organization"
        value={fields.companyName}
        onChange={(e) => setFields({ ...fields, companyName: e.target.value })}
        required
      />
      <Input
        type="tel"
        id="become-an-early-adopter-phone-number"
        label="Phone Number *"
        name="become-an-early-adopter-phone-number"
        autoComplete="tel"
        value={fields.phone}
        onChange={handlePhoneChange}
        required
        pattern="^\+?[0-9]*$"
        inputMode="tel"
        maxLength={15}
      />
      <Input
        type="number"
        id="amount-of-miners"
        label="Amount of Miners *"
        name="amount-of-miners"
        value={fields.amountOfMiners}
        onChange={(e) => setFields({ ...fields, amountOfMiners: e.target.value })}
        required
      />
      <Input
        type="number"
        id="amount-of-megawatts"
        label="Amount of Megawatts *"
        name="amount-of-megawatts"
        value={fields.amountOfMegawatts}
        onChange={(e) => setFields({ ...fields, amountOfMegawatts: e.target.value })}
        required
      />
      <Select
        id="how-did-you-hear-about-us"
        name="how-did-you-hear-about-us"
        label="How did you hear about us? *"
        title="How did you hear about us?"
        options={[{ key: '', label: '' }, ...HOW_DID_YOU_HEAR_ABOUT_US_OPTIONS]}
        disabledKeys={['']}
        value={fields.howDidYouHearAboutUs}
        required
        onChange={(e) =>
          setFields({
            ...fields,
            howDidYouHearAboutUs: e.target.value as (typeof HOW_DID_YOU_HEAR_ABOUT_US_OPTIONS)[number]['key']
          })
        }
      />

      {isError && <p className={styles.becomeAnEarlyAdopterFormError}>Something went wrong. Please try again.</p>}

      <Button color="white" type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Become an Early Adopter'}
        <Image src="/icons/arrow-right.svg" alt="Arrow right" width={25} height={25} />
      </Button>
    </form>
  );
};
