import React from "react";

/**
 * Render the the navigation dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/next/guides/custom-components
 */
export function DropdownNav(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type DropdownNavProps = Parameters<typeof DropdownNav>[0];
