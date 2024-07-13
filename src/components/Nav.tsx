import React from "react";

/**
 * Render the toolbar with the navigation button.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Nav(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type NavProps = Parameters<typeof Nav>[0];
