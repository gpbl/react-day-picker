import { HTMLProps } from "react";

/**
 * Component wrapping the footer.
 *
 * @category Custom Components
 */
export function Footer(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style">,
) {
  return <div {...props}>{props.children}</div>;
}
