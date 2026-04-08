import styles from './style.module.css';

import { Button, EmailNotifyInput, Link } from '@/shared';

const WHO_FITS = [
  {
    title: 'Sales-led SMBs (10–200 people)',
    body: `with a real lead-generation pain — outbound SDRs, founder-led sales, agencies acquiring clients. The first
    MVP loop is built for you literally first.`
  },
  {
    title: 'Ops-minded founders or fractional COOs',
    body: `who want to instrument AI work the way they instrument the rest of the business — with budgets, audits,
    and approvals.`
  },
  {
    title: 'Teams already on Zoho CRM',
    body: `that's our first adapter. Hubspot, Salesforce, and others are next, but founding partners on Zoho move
    fastest.`
  },
  {
    title: 'At least one team member with an active LinkedIn account',
    body: `Sales Navigator strongly preferred for the full search experience. Without Sales Navigator the loop still
    works, but on the more limited Classic search filters.`
  }
];

export const FoundingPartners = () => {
  return (
    <section id="apply" className={styles.fp} aria-labelledby="fp-heading">
      <div className={styles.fpInner}>
        <header className={styles.fpHeader}>
          <h2 id="fp-heading" className={styles.fpHeading}>
            Founding design partners.
          </h2>
          <p className={styles.fpSubheading}>
            A small group working directly with the founder to shape what Int3grate becomes.
          </p>
          <p className={styles.fpLead}>
            {`Not customers in the traditional sense. You work directly with the founder, shape what ships, and get
            lifetime founding-partner terms when the product reaches general availability.`}
          </p>
        </header>

        <div className={styles.fpBlocks}>
          <div className={styles.fpBlock}>
            <h3 className={styles.fpBlockHeading}>Who fits</h3>
            <ul className={styles.fpFitList}>
              {WHO_FITS.map((item) => (
                <li key={item.title} className={styles.fpFitItem}>
                  <span className={styles.fpFitTitle}>{item.title}</span>
                  <span className={styles.fpFitBody}> — {item.body}</span>
                </li>
              ))}
            </ul>
            <p className={styles.fpFitClosing}>
              {`We're selective on purpose. At this stage we work closely with a few teams — the ones where we can
              make real impact together.`}
            </p>
          </div>

          <div className={`${styles.fpBlock} ${styles.fpBlockEmphasized}`}>
            <h3 className={styles.fpBlockHeading}>What you get</h3>
            <p className={styles.fpBlockBody}>
              {`Weekly working sessions with the founder — not a partnership manager. Direct influence on what ships
              and in what order. Priority access to every new module as it lands. Lifetime founding-partner terms
              when the product reaches general availability. Architecture deep-dives and code walkthroughs whenever
              you want them.`}
            </p>
          </div>

          <div className={`${styles.fpBlock} ${styles.fpBlockMuted}`}>
            <h3 className={styles.fpBlockHeading}>What we ask in return</h3>
            <p className={styles.fpBlockBody}>
              {`A few hours of discovery time in the first week. Access to one real workflow we can build the loop
              around. Honest feedback after each iteration. That's it. No payment during the founding-partner phase.`}
            </p>
          </div>

          <div className={styles.fpBlock}>
            <h3 className={styles.fpBlockHeading}>Founding terms close at public launch</h3>
            <p className={styles.fpBlockBody}>
              {`The founding cohort closes when Int3grate goes public in mid-2026. After that, the door is still
              open — but founding-partner terms are not.`}
            </p>
          </div>
        </div>

        <div className={styles.fpCtaBlock}>
          <Link href="#apply">
            <Button color="green" size="lg">
              Apply to the founding cohort
            </Button>
          </Link>
        </div>

        <div className={styles.fpFallback}>
          <p className={styles.fpFallbackText}>Not ready yet? Get notified when MVP ships.</p>
          <EmailNotifyInput id="founding-fallback-email-notify" />
        </div>
      </div>
    </section>
  );
};
