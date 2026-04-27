import type { Locale } from "date-fns";
import React from "react";
import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "react-day-picker";
import { he } from "../locale/he.js";
import type { DayPickerProps } from "../types/props.js";
import * as hebrewDateLib from "./lib/index.js";

/**
 * Render the Hebrew (lunisolar) calendar.
 *
 * Months follow the Hebrew lunisolar cycle with leap years containing Adar I
 * and Adar II. Weeks remain Sunday–Saturday.
 *
 * Defaults:
 *
 * - `locale`: `he`
 * - `dir`: `rtl`
 * - `numerals`: `latn`
 */
export function DayPicker(
  props: DayPickerProps & {
    locale?: Locale;
    dir?: DayPickerProps["dir"];
    numerals?: DayPickerProps["numerals"];
    dateLib?: DayPickerProps["dateLib"];
  },
) {
  const { dateLib: dateLibProp, ...dayPickerProps } = props;
  const locale = props.locale ?? he;
  const dateLib = getDateLib({
    locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
    overrides: dateLibProp,
  });
  return (
    <DayPickerComponent
      {...dayPickerProps}
      locale={locale}
      numerals={props.numerals ?? "latn"}
      dir={props.dir ?? "rtl"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the Hebrew calendar. */
export const getDateLib = (
  options?: DateLibOptions & {
    overrides?: DayPickerProps["dateLib"];
  },
) => {
  const { overrides, ...dateLibOptions } = options ?? {};
  return new DateLib(dateLibOptions, {
    ...hebrewDateLib,
    ...(overrides ?? {}),
  });
};

export { enUS } from "../locale/en-US.js";
export { he } from "../locale/he.js";
