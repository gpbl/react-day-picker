import React from "react";

import styles from "./DocsNavItem.module.css";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

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
  const isExternal = href.startsWith("http");
  const ref = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    // TODO: Scroll active links into view when in a Scroll Area
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
    <Link href={`/${href}`} ref={ref} className={className} {...props}>
      {props.children}
    </Link>
  );
}
