import { PropsWithChildren } from 'react';

import { Text } from '@radix-ui/themes';

export function p(props: PropsWithChildren) {
  return <Text mb="5" as="p" size="3" {...props} />;
}
