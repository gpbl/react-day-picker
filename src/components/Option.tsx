import React from "react";
import type { OptionHTMLAttributes } from "react";

/**
 * Render the `option` element.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Option(props: JSX.IntrinsicElements["option"]) {
  return <option {...props} />;
}

export type OptionProps = Parameters<typeof Option>[0];
