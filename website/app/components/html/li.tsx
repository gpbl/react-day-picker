import { PropsWithChildren } from 'react';

import { Text } from '@radix-ui/themes';

import styles from './li.module.css';

export function li(props: PropsWithChildren) {
  return (
    <li className={styles.li}>
      <Text {...props} />
    </li>
  );
}
