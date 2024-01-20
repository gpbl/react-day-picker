import { PropsWithChildren } from 'react';

import { Text } from '@radix-ui/themes';

export function Description({
  children,
  ...props
}: {
  children: { props: PropsWithChildren<React.ReactNode> };
}) {
  const childText =
    typeof children === 'string' ? children : children?.props.children;
  return (
    <Text as="p" size="4" mt="2" mb="2" color="gray" {...props}>
      {childText}
    </Text>
  );
}
