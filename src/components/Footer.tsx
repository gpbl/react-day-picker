import React, { type HTMLProps } from "react";

import type { UIProps } from "../types/index.js";

/**
 * Component wrapping the footer.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Footer(
  props: Pick<HTMLProps<HTMLElement>, "children" | "className" | "style"> &
    UIProps
) {
  return <div {...props}>{props.children}</div>;
}

export type FooterProps = Parameters<typeof Footer>[0];
