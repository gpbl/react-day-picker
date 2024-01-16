import * as React from 'react';

import { classNames } from '@/lib/classNames';

import styles from './BoxLink.module.css';

interface BoxLinkProps extends React.ComponentPropsWithoutRef<'a'> {}

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(
  function BoxLink({ className, ...props }, forwardedRef) {
    return (
      <a
        ref={forwardedRef}
        className={classNames(styles.BoxLink, className)}
        {...props}
      >
        {props.children}
      </a>
    );
  }
);
