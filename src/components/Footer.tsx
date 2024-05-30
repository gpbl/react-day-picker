import React, { HTMLProps } from "react";

/**
 * Component wrapping the footer.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Footer(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style">
) {
  return <div {...props}>{props.children}</div>;
}

export type FooterProps = Parameters<typeof Footer>[0];
