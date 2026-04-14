import styles from './style.module.css';

import { Link } from '@/shared';

const FOOTER_NAV = [
  { label: 'Why Int3grate', href: '/#why' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Control Panel', href: '/#control-panel' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Work With Us', href: '/#work-with-us' },
  { label: 'Contact', href: '/#contact' }
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogoLink}>
              <span className={styles.footerLogo}>Int3grate.ai</span>
            </Link>
          </div>

          <nav className={styles.footerNav} aria-label="Footer">
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
          <p className={styles.rightsReserved}>&copy; 2026 Int3grate.ai. Intelligent workflow integration.</p>
        </div>
      </div>
    </footer>
  );
};
