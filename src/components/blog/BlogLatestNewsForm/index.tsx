import styles from './style.module.css';

import { Button, Input } from '@/shared';

export const BlogLatestNewsForm = () => {
  return (
    <form className={styles.blogForm}>
      <Input id="email" label="Email *" type="email" placeholder="Enter your email" />
      <Button color="green" type="submit" size="sm">
        {`Get Updates!`}
      </Button>
    </form>
  );
};
