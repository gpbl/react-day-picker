import React from "react";

import { clx } from "@/lib/clx";
import Link from "next/link";
import styles from "./SidebarLink.module.css";

export interface SidebarLinkProps {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  href: string;
  className?: string;
  autoFocus?: boolean;
}
export function SidebarLink(props: SidebarLinkProps) {
  const { active, disabled, href, autoFocus, ...restProps } = props;
  const className = clx(styles.link, active && styles.active);
  const isExternal = href.startsWith("http");
  const ref = React.useRef<HTMLAnchorElement>(null);

  if (disabled) {
    return <span ref={ref} className={className} {...props} />;
  }

  if (isExternal) {
    return (
      <Link
        ref={ref}
        className={className}
        href={href}
        autoFocus={autoFocus}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <Link href={`/${href}`} ref={ref} className={className} {...restProps}>
      {props.children}
    </Link>
  );
}
