import type { OptionHTMLAttributes } from "react";

/**
 * Render the `option` element.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Option(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props} />;
}

export type OptionProps = Parameters<typeof Option>[0];
