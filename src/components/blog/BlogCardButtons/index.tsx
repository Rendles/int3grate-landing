'use client';

import { useState } from 'react';

import styles from './style.module.css';

import { Button, Image, Link } from '@/shared';
import { Menu } from '@/shared/Menu';

interface BlogCardButtonsProps {
  link: string;
}

export const BlogCardButtons = ({ link }: BlogCardButtonsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(link);
  };

  const menuItems = [
    {
      value: 'facebook',
      valueText: (
        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank">
          <Button size="icon" color="grey">
            <Image src="/icons/facebook.svg" alt="facebook icon" width={22} height={22} />
          </Button>
        </Link>
      )
    },
    {
      value: 'linkedin',
      valueText: (
        <Link href={`https://www.linkedin.com/shareArticle?url=${link}`} target="_blank">
          <Button size="icon" color="grey">
            <Image src="/icons/linkedin.svg" alt="linkedin icon" width={18} height={18} />
          </Button>
        </Link>
      )
    },
    {
      value: 'telegram',
      valueText: (
        <Link href={`https://t.me/share//url?url=${link}`} target="_blank">
          <Button size="icon" color="grey">
            <Image src="/icons/telegram.svg" alt="telegram icon" width={18} height={18} />
          </Button>
        </Link>
      )
    },
    {
      value: 'x',
      valueText: (
        <Link href={`https://x.com/intent/post?url=${link}`} target="_blank">
          <Button size="icon" color="grey">
            <Image src="/icons/x.svg" alt="x icon" width={20} height={20} />
          </Button>
        </Link>
      )
    },
    {
      value: 'whatsapp',
      valueText: (
        <Link href={`https://api.whatsapp.com/send/?text=${link}`} target="_blank">
          <Button size="icon" color="grey">
            <Image src="/icons/whatsapp.svg" alt="whatsapp icon" width={22} height={22} />
          </Button>
        </Link>
      )
    }
  ];

  return (
    <div className={styles.blogCardButtons}>
      <Button className={styles.blogCardButtonsButton} size="icon" onClick={handleCopyLink}>
        <Image src="/icons/link.svg" alt="Link icon" width={24} height={24} />
      </Button>

      <Menu
        title="Share:"
        aria-label="Menu item menu"
        minWidth="324px"
        padding="12px 20px"
        backgroundColor="var(--main-background-color)"
        itemHover="transparent"
        direction="horizontal"
        positioning={{ placement: 'bottom-end' }}
        items={menuItems}
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        onClose={() => setIsOpen(false)}>
        <Button className={styles.blogCardButtonsButton} size="icon">
          <Image src="/icons/share.svg" alt="Share icon" width={24} height={24} />
        </Button>
      </Menu>
    </div>
  );
};
