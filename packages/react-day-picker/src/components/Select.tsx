import React, { type SelectHTMLAttributes } from "react";

/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}

export type SelectProps = Parameters<typeof Select>[0];
