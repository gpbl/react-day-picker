import { Box } from "@radix-ui/themes";

import styles from "./Details.module.css";

export function Details(props: JSX.IntrinsicElements["details"]) {
  return (
    <Box asChild className={styles.Details}>
      <details {...props} />
    </Box>
  );
}

export function Summary(props: JSX.IntrinsicElements["summary"]) {
  return (
    <Box asChild className={styles.Summary}>
      <summary {...props} />
    </Box>
  );
}
