import React, { HTMLProps } from "react";

/**
 * Render the label in the month caption.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weeks(props: JSX.IntrinsicElements["tbody"]) {
  return <tbody {...props} />;
}

export type WeeksProps = Parameters<typeof Weeks>[0];
