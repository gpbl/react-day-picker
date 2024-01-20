import { PropsWithChildren } from 'react';

import { Box } from '@radix-ui/themes';

export function ol({ children, ...props }: PropsWithChildren) {
  return (
    <Box {...props} mb="3" pl="4" asChild>
      <ol>{children}</ol>
    </Box>
  );
}
