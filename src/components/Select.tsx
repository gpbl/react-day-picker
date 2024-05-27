import type { SelectHTMLAttributes } from "react";

/**
 * Render the `select` element.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}

export type SelectProps = Parameters<typeof Select>[0];
