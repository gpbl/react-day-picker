import React, { type ButtonHTMLAttributes } from "react";

import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function PreviousMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { components } = useDayPicker();
  return <components.Button {...props} />;
}

export type PreviousMonthButtonProps = Parameters<
  typeof PreviousMonthButton
>[0];
