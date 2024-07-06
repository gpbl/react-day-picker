import React from "react";
import type { SelectHTMLAttributes } from "react";

/**
 * Render the `select` element.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Select(props: JSX.IntrinsicElements["select"]) {
  return <select {...props} />;
}

export type SelectProps = Parameters<typeof Select>[0];
