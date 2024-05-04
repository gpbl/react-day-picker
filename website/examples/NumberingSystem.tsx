import { format } from "date-fns/format";
import { arSA } from "date-fns/locale/ar-SA";
import { DayPicker, Formatters } from "react-day-picker";

export function NumberingSystem() {
  const NU_LOCALE = "ar-u-nu-arab";

  const formatDay: Formatters["formatDay"] = (day) =>
    day.getDate().toLocaleString(NU_LOCALE);

  const formatWeekNumber: Formatters["formatWeekNumber"] = (weekNumber) => {
    return weekNumber.toLocaleString(NU_LOCALE);
  };

  const formatMonthCaption: Formatters["formatMonthCaption"] = (
    date,
    options
  ) => {
    const y = date.getFullYear().toLocaleString(NU_LOCALE);
    const m = format(date, "LLLL", { locale: options?.locale });
    return `${m} ${y}`;
  };

  return (
    <DayPicker
      locale={arSA}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatMonthCaption, formatWeekNumber }}
    />
  );
}
