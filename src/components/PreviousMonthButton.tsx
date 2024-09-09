import React from "react";

import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the previous month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function PreviousMonthButton(props: JSX.IntrinsicElements["button"]) {
  const { components } = useDayPicker();
  return <components.Button {...props} />;
}

export type PreviousMonthButtonProps = Parameters<
  typeof PreviousMonthButton
>[0];
