import { PropsWithChildren } from 'react';

import { Flex, Text } from '@radix-ui/themes';

export function figcaption(
  props: PropsWithChildren<{
    'data-rehype-pretty-code-title'?: '';
  }>
) {
  if ('data-rehype-pretty-code-title' in props) {
    const { children, ...restProps } = props;
    return (
      <figcaption {...restProps}>
        <Flex mb="-7" width="auto" p="2">
          <Text
            size="1"
            style={{
              color: 'var(--slate-a11)',
              backgroundColor: 'var(--slate-2)',
              boxShadow: '0 0 0 1px var(--slate-a5)',
              borderRadius: 'var(--radius-2)',
              padding: 'var(--space-1) var(--space-2)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <code>{children}</code>
          </Text>
        </Flex>
      </figcaption>
    );
  }
  return <figcaption {...props} />;
}
