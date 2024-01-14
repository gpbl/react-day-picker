import { Box, Flex, ScrollArea } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

import styles from './PreviewBox.module.css';

export function PreviewBox(props: PropsWithChildren) {
  return (
    <Box
      className={styles.container}
      m="5"
      p="5"
      style={
        {
          // borderRadius: 'var(--radius-4)'
          // boxShadow: '0 0 0 1px var(--slate-a3)'
        }
      }
    >
      <Flex justify={{ sm: 'start', xs: 'center' }} width="100%">
        {props.children}
      </Flex>
    </Box>
  );
}
