'use client';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

import { Image, Link } from '@/shared';

const SIDEBAR_LINKS = [
  // {
  //   label: 'Main',
  //   href: '/faq/main',
  //   iconSrc: '/icons/chart.svg'
  // },
  {
    label: 'Miners',
    href: '/faq/miners',
    iconSrc: '/icons/speaker.svg'
  },
  {
    label: 'Maintenance',
    href: '/faq/maintenance',
    iconSrc: '/icons/tool.svg'
  },
  {
    label: 'Pools',
    href: '/faq/pools',
    iconSrc: '/icons/dataflow.svg'
  },
  {
    label: 'IP Scanner',
    href: '/faq/ip-scanner',
    iconSrc: '/icons/lightning.svg'
  }
];

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  if (pathname === '/faq') {
    return null;
  }

  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Support</h2>

      <ul>
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.label} className={styles.sidebarListItem}>
            <Link href={link.href} className={clsx(styles.sidebarLink, isActive(link.href) && 'gradient-color')}>
              <Image src={link.iconSrc} alt={link.label} width={24} height={24} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
