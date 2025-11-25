import type { Locale } from "date-fns-jalali";
import * as locales from "date-fns-jalali/locale";
import React from "react";

import {
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "./index.js";
import { getPersianDateLib } from "./persianDateLib.js";
import type { DayPickerProps } from "./types/props.js";

export const faIR = locales.faIR;
export const enUS = locales.enUS;

/**
 * Renders the Persian calendar using the DayPicker component.
 *
 * @defaultValue
 * - `locale`: `faIR`
 * - `dir`: `rtl`
 * - `dateLib`: `jalaliDateLib` from `date-fns-jalali`
 * - `numerals`: `arabext` (Eastern Arabic-Indic)
 * @param props - The props for the Persian calendar, including locale, text
 *   direction, date library, and numeral system.
 * @returns The Persian calendar component.
 * @see https://daypicker.dev/docs/localization#persian-calendar
 */
export function DayPicker(
  props: DayPickerProps & {
    /**
     * The locale to use in the calendar.
     *
     * @default `faIR`
     */
    locale?: Locale;
    /**
     * The direction of the text in the calendar.
     *
     * @default `rtl`
     */
    dir?: DayPickerProps["dir"];
    /**
     * The date library to use in the calendar.
     *
     * @default `jalaliDateLib` from `date-fns-jalali`
     */
    dateLib?: DayPickerProps["dateLib"];
    /**
     * The numeral system to use when formatting dates.
     *
     * - `latn`: Latin (Western Arabic)
     * - `arab`: Arabic-Indic
     * - `arabext`: Eastern Arabic-Indic (Persian)
     * - `deva`: Devanagari
     * - `beng`: Bengali
     * - `guru`: Gurmukhi
     * - `gujr`: Gujarati
     * - `orya`: Oriya
     * - `tamldec`: Tamil
     * - `telu`: Telugu
     * - `knda`: Kannada
     * - `mlym`: Malayalam
     *
     * @defaultValue `arabext` Eastern Arabic-Indic (Persian)
     * @see https://daypicker.dev/docs/translation#numeral-systems
     */
    numerals?: DayPickerProps["numerals"];
  },
) {
  const dateLib = getDateLib({
    locale: props.locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
  });
  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? faIR}
      numerals={props.numerals ?? "arabext"}
      dir={props.dir ?? "rtl"}
      dateLib={dateLib}
    />
  );
}

/**
 * Returns the date library used in the Persian calendar.
 *
 * @param options - Optional configuration for the date library.
 * @returns The date library instance.
 */
export const getDateLib = (options?: DateLibOptions) => {
  return getPersianDateLib(options);
};
