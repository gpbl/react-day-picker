import { PropsWithChildren } from 'react';

export function Prose(props: PropsWithChildren) {
  return <div className="prose">{props.children}</div>;
}
