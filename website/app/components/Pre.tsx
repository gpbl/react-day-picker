import { PropsWithChildren } from 'react';

export function Pre(props: PropsWithChildren) {
  return <pre>{props.children}</pre>;
}
