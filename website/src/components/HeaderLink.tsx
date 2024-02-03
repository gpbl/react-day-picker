import * as React from "react";
import styles from "./HeaderLink.module.css";
import Link from "next/link";

export function HeaderLink({
  active,
  children,
  href = "",
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  href?: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      data-state={active ? "active" : "inactive"}
      className={styles.HeaderLink}
      {...props}
    >
      {children}
    </Link>
  );
}
