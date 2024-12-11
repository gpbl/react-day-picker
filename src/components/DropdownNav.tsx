import React, { type HTMLAttributes } from "react";

/**
 * Render the the navigation dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function DropdownNav(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export type DropdownNavProps = Parameters<typeof DropdownNav>[0];
