import React, { HTMLProps } from "react";

/**
 * Render the label in the month caption.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function CaptionLabel(props: JSX.IntrinsicElements["span"]) {
  return <span {...props} />;
}

export type CaptionLabelProps = Parameters<typeof CaptionLabel>[0];
