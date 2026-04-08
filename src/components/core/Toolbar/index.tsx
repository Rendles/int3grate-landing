'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

import { Button, Image, Link } from '@/shared';

interface ToolbarProps {
  navLinks: {
    href: string;
    label: string;
  }[];
  primaryCta: {
    href: string;
    label: string;
  };
}

export const Toolbar = ({ navLinks, primaryCta }: ToolbarProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <div className={styles.toolbarContainer}>
      <Button size="icon" color="grey" onClick={handleOpen} aria-label="Open menu">
        <Image src="/icons/burger-menu.svg" alt="" width={20} height={20} />
      </Button>

      {isOpen && (
        <div className={styles.toolbar} role="dialog" aria-modal="true" aria-label="Navigation">
          <div className={styles.toolbarTop}>
            <Link className={styles.toolbarLogoLink} href="/" onClick={handleClose}>
              <span className={styles.toolbarLogo}>Int3grate</span>
            </Link>

            <Button size="icon" color="grey" onClick={handleClose} aria-label="Close menu">
              <Image src="/icons/close-menu.svg" alt="" width={20} height={20} />
            </Button>
          </div>

          <nav aria-label="Primary">
            <ul className={styles.toolbarNavList}>
              {navLinks.map(({ href, label }) => (
                <li className={styles.toolbarNavListItem} key={href}>
                  <Link
                    className={clsx(styles.toolbarNavListLink, isActive(href) && styles.toolbarNavListLinkActive)}
                    href={href}
                    onClick={handleClose}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.toolbarButtons}>
            <Link href={primaryCta.href} onClick={handleClose}>
              <Button size="md" color="green" fullWidth>
                {primaryCta.label}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
