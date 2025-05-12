import React, { type HTMLAttributes } from "react";

/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weeks(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody {...props} />;
}

export type WeeksProps = Parameters<typeof Weeks>[0];
