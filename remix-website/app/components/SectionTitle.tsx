import { PropsWithChildren } from 'react';

import { Text } from '@radix-ui/themes';

export function SectionTitle({
  children,
  ...props
}: {
  children: { props: PropsWithChildren } | string;
}) {
  const childText =
    typeof children === 'string' ? children : children.props.children;
  return (
    <Text
      as="p"
      size="4"
      style={{ color: 'var(--accent-a9)' }}
      weight="bold"
      mb="2"
      {...props}
    >
      {childText}
    </Text>
  );
}
