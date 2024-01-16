import { Box, ScrollArea } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

export const SideNav = ({ children }: PropsWithChildren) => (
  <Box
    display={{ initial: 'none', md: 'block' }}
    style={{ width: 250, flexShrink: 0 }}
  >
    <Box
      position="fixed"
      left="0"
      bottom="0"
      style={{
        zIndex: 1,
        top: 'var(--header-height)',
        overflowX: 'hidden',
        width: 'inherit'
      }}
    >
      <ScrollArea>{children}</ScrollArea>
    </Box>
  </Box>
);
