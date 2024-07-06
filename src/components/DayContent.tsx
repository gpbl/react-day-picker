import React from "react";

/**
 * Render the content of the day cell when not a `DayButton`.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function DayContent(props: JSX.IntrinsicElements["div"]) {
  return <div {...props} />;
}

export type DayContentProps = Parameters<typeof DayContent>[0];
