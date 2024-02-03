import * as React from 'react';
import { Link as RemixLink } from '@remix-run/react';
import styles from './HeaderLink.module.css';

export function HeaderLink({
  active,
  children,
  href = '',
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  href?: string;
  active?: boolean;
}) {
  return (
    <RemixLink
      to={href}
      data-state={active ? 'active' : 'inactive'}
      className={styles.HeaderLink}
      {...props}
    >
      {children}
    </RemixLink>
  );
}
