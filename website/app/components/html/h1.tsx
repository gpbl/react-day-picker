import { PropsWithChildren } from 'react';

import { Heading } from '@radix-ui/themes';

export function h1(props: PropsWithChildren) {
  return (
    <Heading asChild size="8" mb="3">
      <h1 {...props} style={{ scrollMarginTop: 'var(--space-9)' }}>
        {props.children}
      </h1>
    </Heading>
  );
}
