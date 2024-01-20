import { PropsWithChildren } from 'react';

import { Separator } from '@radix-ui/themes';

export function hr(props: PropsWithChildren) {
  return (
    <Separator size="4" {...props} my="6" style={{ marginInline: 'auto' }} />
  );
}
