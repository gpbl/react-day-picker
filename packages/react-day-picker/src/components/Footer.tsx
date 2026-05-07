import React, { type HTMLAttributes } from "react";

/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Footer(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

/** Props accepted by the {@link Footer} component. */
export type FooterProps = Parameters<typeof Footer>[0];
