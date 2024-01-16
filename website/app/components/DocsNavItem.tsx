import React from 'react';

import scrollIntoView from 'scroll-into-view-if-needed';

import { classNames } from '@/lib/classNames';
import { Link as RemixLink } from '@remix-run/react';

import styles from './DocsNavItem.module.css';

export interface DocsNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
}
export function DocsNavItem({
  active,
  disabled,
  href,
  ...props
}: DocsNavItemProps) {
  const className = classNames(styles.DocsNavItem, active && styles.active);
  const isExternal = href.startsWith('http');
  const ref = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    // Scroll active links into view when in a Scroll Area
    if (ref.current && active) {
      const container = document.querySelector(
        '[data-radix-scroll-area-viewport]'
      );

      if (!container) {
        return;
      }

      // Tread very, very, very carefully if changing this.
      // Sneaky bugs reproduced only on select cursed devices may show up.
      scrollIntoView(ref.current, {
        block: 'nearest',
        scrollMode: 'if-needed',
        boundary: (parent) => Boolean(container.contains(parent)),
        behavior: (actions) => {
          actions.forEach(({ el, top }) => {
            const dir = el.scrollTop < top ? 1 : -1;
            el.scrollTop = top + 80 * dir;
          });
        }
      });
    }
  }, [active]);

  if (disabled) {
    return <span ref={ref} className={className} {...props} />;
  }

  if (isExternal) {
    return (
      <a
        ref={ref}
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {props.children}
      </a>
    );
  }

  return (
    <RemixLink to={`/${href}`} ref={ref} className={className} {...props}>
      {props.children}
    </RemixLink>
  );
}
