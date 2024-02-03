import { classNames } from "@/utils/classNames";
import { Link2Icon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";

import styles from "./LinkHeading.module.css";

export function LinkHeading({
  id,
  children,
  className,
  ...props
}: {
  id: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      asChild
      weight="bold"
      highContrast
      color="gray"
      underline="hover"
      {...props}
    >
      <a
        id={id}
        href={`#${id}`}
        className={classNames(className, styles.LinkHeading)}
      >
        {children}

        <Link2Icon aria-hidden />
      </a>
    </Link>
  );
}
