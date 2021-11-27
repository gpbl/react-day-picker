import React from "react";
import {
  DateFormatter,
  DayPicker,
  WeekNumberFormatter,
} from "react-day-picker";

import { format } from "date-fns";
import arabic from "date-fns/locale/ar-SA";

const NU_LOCALE = "ar-u-nu-arab";

const formatDay: DateFormatter = (day) =>
  day.getDate().toLocaleString(NU_LOCALE);

const formatWeekNumber: WeekNumberFormatter = (weekNumber) =>
  weekNumber.toLocaleString(NU_LOCALE);

const formatCaption: DateFormatter = (date, { locale }) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const m = format(date, "LLLL", { locale });
  return `${m} ${y}`;
};

export default function App() {
  return (
    <DayPicker
      locale={arabic}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatCaption, formatWeekNumber }}
    />
  );
}
