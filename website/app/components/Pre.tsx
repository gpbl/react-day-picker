import { type PropsWithChildren } from "react";

import { Box } from "@radix-ui/themes";

export function Pre(props: PropsWithChildren) {
  return (
    <Box
      {...props}
      p="4"
      my="5"
      style={{
        overflow: "auto",
        boxShadow: "0 0 0 1px var(--slate-a5)",
        borderRadius: "var(--radius-2)",
        fontSize: "var(--font-size-2)",
        backgroundColor: "var(--slate-a2)",
      }}
    >
      <pre
        style={{
          fontSize: "var(--font-size-2) ",
          fontFamily: "var(--font-mono)",
        }}
      >
        {props.children}
      </pre>
    </Box>
  );
}
