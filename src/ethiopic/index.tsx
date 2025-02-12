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
 * Render the Persian Calendar.
 *
 * @see https://daypicker.dev/docs/localization#persian-calendar
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
     * - `arab`: Arabic-Indic
     * - `arabext`: Eastern Arabic-Indic (Persian)
     * - `deva`: Devanagari
     * - `ethio`: Ethiopic
     * - `beng`: Bengali
     * - `guru`: Gurmukhi
     * - `gujr`: Gujarati
     * - `orya`: Oriya
     * - `tamldec`: Tamil
     * - `telu`: Telugu
     * - `knda`: Kannada
     * - `mlym`: Malayalam
     *
     * @defaultValue `ethio` Eastern Arabic-Indic (Persian)
     * @see https://daypicker.dev/docs/translation#numeral-systems
     */
    numerals?: DayPickerProps["numerals"];
  }
) {
  const dateLib = getDateLib({
    locale: props.locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone
  });
  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? ({} as Locale)}
      numerals={props.numerals ?? "geez"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the calendar. */
export const getDateLib = (options?: DateLibOptions) => {
  return new DateLib(options, ethiopicDateLib);
};
