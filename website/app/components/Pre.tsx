import { Box } from '@radix-ui/themes';
import { BoxProps } from 'node_modules/@radix-ui/themes/dist/esm/components/box';
import { PropsWithChildren } from 'react';

export function Pre(props: PropsWithChildren<BoxProps>) {
  return (
    <Box
      p="4"
      my="5"
      style={{
        ...props.style,
        overflow: 'auto',
        boxShadow: '0 0 0 1px var(--slate-a5)',
        borderRadius: 'var(--radius-2)',
        fontSize: 'var(--font-size-2)',
        backgroundColor: 'var(--slate-a2)'
      }}
      {...props}
    >
      <pre
        style={{
          fontSize: 'var(--font-size-2) ',
          fontFamily: 'var(--font-mono)'
        }}
      >
        {props.children}
      </pre>
    </Box>
  );
}
