import type { HTMLProps } from "react";

/** Component wrapping the month grids. */
export function Months(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style">,
) {
  return <div {...props}>{props.children}</div>;
}
