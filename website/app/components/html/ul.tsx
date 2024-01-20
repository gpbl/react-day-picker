import { PropsWithChildren } from 'react';

import styles from './ul.module.css';

export function ul(props: PropsWithChildren) {
  return <ul {...props} className={styles.ul} />;
}
