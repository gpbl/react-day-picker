import { Code } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

export function code(props: PropsWithChildren) {
  const isInline = typeof props.children === 'string';
  if (isInline) {
    return <Code {...props} />;
  }
  return <code {...props} />;
}
