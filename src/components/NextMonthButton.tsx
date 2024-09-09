import React from "react";

import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the next month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function NextMonthButton(props: JSX.IntrinsicElements["button"]) {
  const { components } = useDayPicker();
  return <components.Button {...props} />;
}

export type NextMonthButtonProps = Parameters<typeof NextMonthButton>[0];
