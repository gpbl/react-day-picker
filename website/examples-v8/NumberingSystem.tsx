import React from "react";

import { format } from "date-fns";
import { arSA } from "react-day-picker/locale";

import {
  DateFormatter,
  DayPicker,
  WeekNumberFormatter
} from "./react-day-picker-v8";

const NU_LOCALE = "ar-u-nu-arab";

const formatDay: DateFormatter = (day) =>
  day.getDate().toLocaleString(NU_LOCALE);

const formatWeekNumber: WeekNumberFormatter = (weekNumber) => {
  return weekNumber.toLocaleString(NU_LOCALE);
};

const formatCaption: DateFormatter = (date, options) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const m = format(date, "LLLL", { locale: options?.locale });
  return `${m} ${y}`;
};

export function NumberingSystem() {
  return (
    <DayPicker
      locale={arSA}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatCaption, formatWeekNumber }}
    />
  );
}
