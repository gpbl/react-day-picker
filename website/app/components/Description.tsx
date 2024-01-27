import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Text } from '@radix-ui/themes';

export function Description(props: any) {
  return (
    <Text as="p" size="5" mt="2" mb="2" color="gray">
      {props.children &&
        props.children.props.children &&
        props.children.props.children}
    </Text>
  );
}
