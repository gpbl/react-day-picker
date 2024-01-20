import { PropsWithChildren } from 'react';

import { Heading } from '@radix-ui/themes';

export function h4(props: PropsWithChildren) {
  const { children } = props;
  return (
    <Heading asChild size="4" mt="6" mb="3" {...props}>
      <h4 style={{ scrollMarginTop: 'var(--space-9)' }}>{children}</h4>
    </Heading>
  );
}
