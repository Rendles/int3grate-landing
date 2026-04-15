'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { Toolbar } from '..';

import styles from './style.module.css';

import { Button, Image, Link } from '@/shared';

const NAV_LINKS = [
  { label: 'Why Int3grate', href: '/#why' },
  { label: 'What We Build', href: '/#solutions' },
  { label: 'Process', href: '/#process' },
  { label: 'Work With Us', href: '/#work-with-us' },
  { label: 'Contact', href: '/#contact' }
];

const PRIMARY_CTA = {
  label: 'Talk to our team',
  href: '/#contact'
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
          <Image src="/icons/logo.svg" alt="Int3grate.ai logo" width={24} height={24} />
          <span className={styles.navbarLogo}>Int3grate.ai</span>
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
