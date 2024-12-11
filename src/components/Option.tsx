import React, { type OptionHTMLAttributes } from "react";

/**
 * Render the `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}

export type OptionProps = Parameters<typeof Option>[0];
