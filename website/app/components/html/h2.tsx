import { PropsWithChildren } from 'react';

import { Heading } from '@radix-ui/themes';
import { LinkHeading } from '@/components/LinkHeading';

export function h2(props: PropsWithChildren<{ id?: string }>) {
  const { children, id } = props;
  return (
    <Heading
      size="5"
      mt="8"
      mb="3"
      asChild
      {...props}
      id={id}
      style={{ scrollMarginTop: 'var(--space-9)' }}
      data-heading
    >
      <h3>{id ? <LinkHeading id={id}>{children}</LinkHeading> : children}</h3>
    </Heading>
  );
}
