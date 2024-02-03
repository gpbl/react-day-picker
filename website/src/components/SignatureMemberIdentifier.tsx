import { Box } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

export function SignatureMemberIdentifier(props: PropsWithChildren) {
  return (
    <Box
      {...props}
      p="4"
      mb="6"
      style={{
        overflow: 'auto',
        boxShadow: '0 0 0 1px var(--slate-a5)',
        borderRadius: 'var(--radius-2)',
        fontSize: 'var(--font-size-3)',
        backgroundColor: 'var(--slate-a2)'
      }}
    >
      {props.children}
    </Box>
  );
}
