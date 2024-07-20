import React from "react";

/**
 * Render the `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Select(props: JSX.IntrinsicElements["select"]) {
  return <select {...props} />;
}

export type SelectProps = Parameters<typeof Select>[0];
