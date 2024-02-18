import { PropsWithChildren } from "react";

import { Box } from "@radix-ui/themes";

export function PlaygroundDialog(props: PropsWithChildren) {
  return (
    <Box
      className="m-6 min-w-[300px] max-w-[400px] p-4 sticky overflow-y-auto"
      style={{
        maxHeight: "calc(100vh - var(--header-height) - 3rem)",
        top: "calc(var(--header-height) + 1rem)",
        overflow: "auto",
        boxShadow: "0 0 0 1px var(--slate-a5)",
        borderRadius: "var(--radius-3)",
        backgroundColor: "var(--slate-a2)",
      }}
    >
      <Box>{props.children}</Box>
    </Box>
  );
}
