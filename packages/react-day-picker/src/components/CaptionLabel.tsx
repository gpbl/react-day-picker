import React, { type HTMLAttributes } from "react";

/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function CaptionLabel(props: HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} />;
}

export type CaptionLabelProps = Parameters<typeof CaptionLabel>[0];
