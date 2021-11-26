import React from "react";
import {
  DateFormatter,
  DayPicker,
  WeekNumberFormatter,
} from "react-day-picker";

import { format } from "date-fns";
import arabic from "date-fns/locale/ar-SA";

export default function App() {
  const nuLocale = "ar-u-nu-arab";

  const formatDay: DateFormatter = (day) =>
    day.getDate().toLocaleString(nuLocale);
  const formatWeekNumber: WeekNumberFormatter = (weekNumber) =>
    weekNumber.toLocaleString(nuLocale);
  const formatCaption: DateFormatter = (date, { locale }) => {
    const y = date.getFullYear().toLocaleString(nuLocale);
    const m = format(date, "LLLL", { locale });
    return `${m} ${y}`;
  };

  return (
    <DayPicker
      locale={arabic}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatCaption, formatWeekNumber }}
    />
  );
}
