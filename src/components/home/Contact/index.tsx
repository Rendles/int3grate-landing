'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Mail, Phone, ShieldCheck } from 'lucide-react';

import styles from './style.module.css';

import { Button, Input, Link, Textarea } from '@/shared';

const INFO_ROWS = [
  { icon: Mail, text: 'Response tailored to your workflow needs' },
  { icon: Phone, text: 'Discovery call with implementation perspective' },
  { icon: ShieldCheck, text: 'Automation with approval and governance in mind' }
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.contactInner}>
        <div className={styles.contactLeft}>
          <Link href="/" className={styles.contactLogoLink}>
            <span className={styles.contactLogo}>Int3grate.ai</span>
          </Link>

          <h2 id="contact-heading" className={styles.contactHeading}>
            {`Let's design your AI operating layer.`}
          </h2>

          <p className={styles.contactBody}>
            {`Tell us about your workflows, bottlenecks, or automation goals. Someone from our team will reach out to discuss where Int3grate.ai can create the most leverage.`}
          </p>

          <div className={styles.contactInfoRows}>
            {INFO_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.text} className={styles.contactInfoRow}>
                  <Icon size={18} className={styles.contactInfoIcon} aria-hidden="true" />
                  <span className={styles.contactInfoText}>{row.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.contactRight}>
          <span className={styles.contactFormLabel}>CONTACT FORM</span>
          <h3 className={styles.contactFormHeading}>Have our team reach out</h3>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.contactFormGrid}>
              <Input id="contact-name" label="Full name" placeholder="Your name" required />
              <Input id="contact-company" label="Company" placeholder="Company name" required />
              <Input id="contact-email" label="Email" type="email" placeholder="you@company.com" required />
              <Input id="contact-phone" label="Phone" placeholder="Optional" />
            </div>

            <Input
              id="contact-automate"
              label="What would you like to automate?"
              placeholder="Sales, admin, operations, reporting, approvals..."
            />

            <Textarea
              id="contact-details"
              label="Tell us about your workflow or challenge"
              placeholder="Describe your team, tools, bottlenecks, or goals"
              rows={5}
            />

            <div className={styles.contactFormFooter}>
              <Button type="submit" color="green" size="lg">
                Submit request
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <p className={styles.contactFormHelper} aria-live="polite">
                {submitted
                  ? 'Thanks — your request has been captured for follow-up.'
                  : `We'll follow up with a tailored conversation.`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
