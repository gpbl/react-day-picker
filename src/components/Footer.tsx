import { HTMLProps } from "react";

/**
 * Component wrapping the footer.
 *
 * @group Components
 */
export function Footer(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style">
) {
  return <div {...props}>{props.children}</div>;
}
