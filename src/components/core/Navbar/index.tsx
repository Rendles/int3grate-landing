'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { Toolbar } from '..';

import styles from './style.module.css';

import { Button, Link } from '@/shared';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/get-a-demo' }
];

/*
 * The single primary CTA from the spec (§1.4 / §12.1). It must remain visible
 * in the sticky header on every section after the hero. Anchor "/#apply" is a
 * placeholder — when Section 8 (Founding design partners) ships, the matching
 * id="apply" lands on its container and this CTA starts working everywhere
 * with no nav changes.
 */
const PRIMARY_CTA = {
  label: 'Apply to the founding cohort',
  href: '/#apply'
};

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/" className={styles.navbarLogoLink}>
          <span className={styles.navbarLogo}>Int3grate</span>
        </Link>

        <nav className={styles.navbarNav} aria-label="Primary">
          <ul className={styles.navbarNavList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  className={clsx(styles.navbarNavListLink, isActive(href) && styles.navbarNavListLinkActive)}
                  href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navbarButtons}>
          <Link href={PRIMARY_CTA.href}>
            <Button size="sm" color="green">
              {PRIMARY_CTA.label}
            </Button>
          </Link>
        </div>

        <Toolbar navLinks={NAV_LINKS} primaryCta={PRIMARY_CTA} />
      </div>
    </header>
  );
};
