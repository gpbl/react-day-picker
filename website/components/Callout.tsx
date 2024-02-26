import { PropsWithChildren } from "react";

import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout as RadixCallout } from "@radix-ui/themes";

import styles from "./Callout.module.css";

export function Callout(props: PropsWithChildren<{ icon?: "info" }>) {
  return (
    <RadixCallout.Root className={styles.Callout}>
      <RadixCallout.Icon>
        <InfoCircledIcon width="22" height="22" />
      </RadixCallout.Icon>
      <Box>{props.children}</Box>
    </RadixCallout.Root>
  );
}
