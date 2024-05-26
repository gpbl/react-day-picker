import React from "react";

import { FormatOptions, format } from "date-fns";
import { arSA } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

const NU_LOCALE = "ar-u-nu-arab";

const formatDay = (day: Date) => day.getDate().toLocaleString(NU_LOCALE);

const formatWeekNumber = (weekNumber: number) => {
  return weekNumber.toLocaleString(NU_LOCALE);
};

const formatCaption = (date: Date, options: FormatOptions) => {
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
