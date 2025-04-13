import React from "react";

import type { Locale } from "date-fns";

import {
  DateLib,
  DateLibOptions,
  DayPicker as DayPickerComponent
} from "../index.js";
import type { DayPickerProps } from "../types/props.js";

import * as ethiopicDateLib from "./lib/index.js";

/**
 * Render the Ethiopic Calendar.
 *
 * @see https://daypicker.dev/docs/localization#ethiopic-calendar
 */
export function DayPicker(
  props: DayPickerProps & {
    /**
     * The locale to use in the calendar.
     *
     * @default `am-ET`
     */
    locale?: Locale;
    /**
     * The numeral system to use when formatting dates.
     *
     * - `latn`: Latin (Western Arabic)
     * - `geez`: Ge'ez (Ethiopic numerals)
     *
     * @defaultValue `latn` Latin (Western Arabic)
     * @see https://daypicker.dev/docs/translation#numeral-systems
     */
    numerals?: DayPickerProps["numerals"];
  }
) {
  const dateLib = getDateLib({
    locale: props.locale,
    weekStartsOn: 1,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone
  });
  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? ({} as Locale)}
      numerals={props.numerals ?? "latn"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the calendar. */
export const getDateLib = (options?: DateLibOptions) => {
  return new DateLib(options, ethiopicDateLib);
};
