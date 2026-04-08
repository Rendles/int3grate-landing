import styles from './style.module.css';

import { Link } from '@/shared';

const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/get-a-demo' }
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogoLink}>
              <span className={styles.footerLogo}>Int3grate</span>
            </Link>

            {/*
              Optional "Built in the open" trust signal slot — spec §14.1.
              Add a single short line here ONLY when at least one supporting
              artifact actually exists (public changelog, weekly product
              notes, public roadmap, public Slack/Discord). The spec warns:
              an empty promise here is worse than no promise at all.

              Suggested copy when ready:
                "Built in the open. Public changelog and weekly product notes."
            */}
          </div>

          <nav className={styles.footerNav} aria-label="Footer">
            <p className={styles.footerColTitle}>Navigate</p>
            <ul className={styles.footerList}>
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.rightsReserved}>© Int3grate. All rights reserved.</p>

          <Link href="#" className={styles.footerLegalLink}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
