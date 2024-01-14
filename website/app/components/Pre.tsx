import { Box } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

export function Pre(props: PropsWithChildren) {
  return (
    <Box
      {...props}
      p="4"
      my="5"
      style={{
        boxShadow: '0 0 0 1px var(--slate-a3)',
        borderRadius: 'var(--radius-2)',
        fontSize: 'var(--font-size-2)',
        backgroundColor: 'var(--slate-a2)'
      }}
    >
      <pre style={{}}>{props.children}</pre>
    </Box>
  );
}
