import Link from "next/link";
import * as React from "react";
import styles from "./HeaderLink.module.css";

interface HeaderLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  active?: boolean;
  href: string;
}

export function HeaderLink(props: HeaderLinkProps) {
  const { active, children, href, ...restProps } = props;
  return (
    <Link
      href={href}
      data-state={active ? "active" : "inactive"}
      className={styles.HeaderLink}
      {...restProps}
    >
      {children}
    </Link>
  );
}
