import { clx } from "@/lib/clx";
import { Link2Icon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";

import styles from "./LinkHeading.module.css";

interface LinkHeadingProps extends React.ComponentProps<typeof Link> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

/** Add the bookmark icon and the link when heading as an id. */
export function LinkHeading(props: LinkHeadingProps) {
  const { id, children, className, ...restProps } = props;
  return (
    <Link
      asChild
      weight="bold"
      highContrast
      color="gray"
      underline="hover"
      {...restProps}
    >
      <a href={`#${id}`} className={clx(className, styles.LinkHeading)}>
        {children}
        <Link2Icon aria-hidden />
      </a>
    </Link>
  );
}
