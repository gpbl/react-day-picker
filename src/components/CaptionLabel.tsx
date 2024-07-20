import React from "react";

/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function CaptionLabel(props: JSX.IntrinsicElements["span"]) {
  return <span {...props} />;
}

export type CaptionLabelProps = Parameters<typeof CaptionLabel>[0];
