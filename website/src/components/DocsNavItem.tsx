import React from "react";

import styles from "./DocsNavItem.module.css";
import { clx } from "@/lib/clx";
import Link from "next/link";

export interface DocsNavItemProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
}
export function DocsNavItem(props: DocsNavItemProps) {
  const { active, disabled, href, ...restProps } = props;
  const className = clx(styles.DocsNavItem, active && styles.active);
  const isExternal = href.startsWith("http");
  const ref = React.useRef<HTMLAnchorElement>(null);

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
        {...restProps}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link href={`/${href}`} ref={ref} className={className} {...restProps}>
      {props.children}
    </Link>
  );
}
