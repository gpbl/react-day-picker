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
}
export function SidebarLink(props: SidebarLinkProps) {
  const { active, disabled, href, ...restProps } = props;
  const className = clx(styles.link, active && styles.active);
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
