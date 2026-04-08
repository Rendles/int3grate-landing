import styles from './style.module.css';

import { Image, Link } from '@/shared';

interface FaqCardProps {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
}

export const FaqCard = ({ title, description, iconSrc, href }: FaqCardProps) => {
  return (
    <Link href={href}>
      <div className={styles.faqCard}>
        <Image src={iconSrc} alt={title} width={48} height={48} />
        <div className={styles.faqCardContent}>
          <h4 className={styles.faqCardTitle}>{title}</h4>
          <p className={styles.faqCardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
