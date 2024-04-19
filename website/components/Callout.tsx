import {
  CodeIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import { Box, Heading, Callout as RadixCallout } from "@radix-ui/themes";

import styles from "./Callout.module.css";

type CalloutType = "info" | "warning" | "note" | "alert";
type CalloutColor = "indigo" | "orange" | "blue" | "amber";

interface CalloutProps {
  title?: string;
  type?: CalloutType;
  children?: React.ReactNode;
}

const iconsMap = {
  info: InfoCircledIcon,
  warning: CodeIcon,
  note: Pencil1Icon,
  alert: ExclamationTriangleIcon,
};

const colorMap: Record<CalloutType, CalloutColor> = {
  info: "indigo",
  warning: "orange",
  alert: "amber",
  note: "blue",
};

export function Callout(props: CalloutProps) {
  const { type = "info" } = props;
  const Icon = iconsMap[type];
  const color = colorMap[type];
  return (
    <RadixCallout.Root className={styles.Callout} color={color}>
      <RadixCallout.Icon>
        <Icon width="18" height="18" />
      </RadixCallout.Icon>
      {props.title && (
        <Heading size="2" as="h5">
          {props.title}
        </Heading>
      )}
      <Box>{props.children}</Box>
    </RadixCallout.Root>
  );
}
