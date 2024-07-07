import React from "react";

/**
 * Render the root element.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/advanced-guides/custom-components
 */
export function Root(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type RootProps = Parameters<typeof Root>[0];
