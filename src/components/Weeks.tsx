import React from "react";

/**
 * Render the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weeks(
  props: JSX.IntrinsicElements["tbody"] & {
    month: Date;
  }
) {
  const { month, ...tbodyProps } = props;
  return <tbody {...tbodyProps} />;
}

export type WeeksProps = Parameters<typeof Weeks>[0];
