import React, { type HTMLProps } from "react";

/**
 * Component wrapping the footer.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Footer(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type FooterProps = Parameters<typeof Footer>[0];
