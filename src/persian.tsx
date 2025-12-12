import * as dateFnsJalali from "date-fns-jalali";
import React from "react";
import type { DayPickerLocale } from "./classes/DateLib.js";
import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "./index.js";
import { enUSJalali } from "./locale/en-US-jalali.js";
import { faIRJalali } from "./locale/fa-IR-jalali.js";
import { createJalaliNoonOverrides } from "./noonJalaliDateLib.js";
import type { DayPickerProps } from "./types/props.js";

/** Persian (Iran) Jalali locale with DayPicker labels. */
export const faIR = faIRJalali;
/** English (US) Jalali locale with DayPicker labels. */
export const enUS = enUSJalali;

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
    locale?: DayPickerLocale;
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
  const {
    locale: localeProp,
    dir,
    dateLib: dateLibProp,
    numerals,
    noonSafe,
    ...restProps
  } = props;

  const dateLib = getDateLib({
    locale: localeProp,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
    numerals: numerals ?? "arabext",
    noonSafe,
    overrides: dateLibProp,
  });
  return (
    <DayPickerComponent
      {...restProps}
      locale={localeProp ?? faIR}
      numerals={numerals ?? "arabext"}
      dir={dir ?? "rtl"}
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
export const getDateLib = (
  options?: DateLibOptions & {
    noonSafe?: boolean;
    overrides?: DayPickerProps["dateLib"];
  },
) => {
  const { noonSafe, overrides, ...dateLibOptions } = options ?? {};
  const baseOverrides =
    noonSafe && dateLibOptions.timeZone
      ? {
          ...dateFnsJalali,
          ...createJalaliNoonOverrides({
            timeZone: dateLibOptions.timeZone,
            weekStartsOn: dateLibOptions.weekStartsOn,
            locale: dateLibOptions.locale,
          }),
        }
      : dateFnsJalali;

  return new DateLib(dateLibOptions, { ...baseOverrides, ...overrides });
};
