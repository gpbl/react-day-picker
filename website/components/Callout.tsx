import { CodeIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout as RadixCallout } from "@radix-ui/themes";

import styles from "./Callout.module.css";

interface CalloutProps {
  type: "info" | "warning";
  children: React.ReactNode;
}

const iconsMap = {
  info: InfoCircledIcon,
  warning: CodeIcon,
};

export function Callout(props: CalloutProps) {
  const { type = "info" } = props;
  const Icon = iconsMap[type];
  return (
    <RadixCallout.Root
      className={styles.Callout}
      color={type === "info" ? "indigo" : "orange"}
    >
      <RadixCallout.Icon>
        <Icon width="18" height="18" />
      </RadixCallout.Icon>
      <Box>{props.children}</Box>
    </RadixCallout.Root>
  );
}
