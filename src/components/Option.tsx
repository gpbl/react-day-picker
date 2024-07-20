import React from "react";

/**
 * Render the `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Option(props: JSX.IntrinsicElements["option"]) {
  return <option {...props} />;
}

export type OptionProps = Parameters<typeof Option>[0];
