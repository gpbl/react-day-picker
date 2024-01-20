import { PropsWithChildren } from 'react';

import { Link as RemixLink } from '@remix-run/react';
import { Link } from '@radix-ui/themes';

export function a(props: PropsWithChildren<{ href?: string }>) {
  const { href = '', ...restProps } = props;
  if (href.startsWith('http')) {
    return <Link {...restProps} href={href} target="_blank" rel="noopener" />;
  }
  return (
    <RemixLink to={href}>
      <Link {...restProps} />
    </RemixLink>
  );
}
