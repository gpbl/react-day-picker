import React, { HTMLProps } from "react";

import { UI } from "../UI.js";
import { getWeekdays } from "../helpers/getWeekdays.js";
import type { UIProps } from "../types/index.js";

import { Weekday as DefaultWeekday } from "./Weekday.js";

/**
 * Render the row with the weekday names.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Weekdays(props: HTMLProps<HTMLTableRowElement>) {
  return <tr {...props} />;
}

export type WeekdaysProps = Parameters<typeof Weekdays>[0];
