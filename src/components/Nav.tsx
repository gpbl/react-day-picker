import React from "react";

/**
 * Render the toolbar with the navigation button.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function Nav(props: JSX.IntrinsicElements["nav"]) {
  return <nav {...props} />;
}

export type NavProps = Parameters<typeof Nav>[0];
