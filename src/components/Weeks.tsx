import React from "react";

/**
 * Render the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weeks(props: JSX.IntrinsicElements["tbody"]) {
  return <tbody {...props} />;
}

export type WeeksProps = Parameters<typeof Weeks>[0];
