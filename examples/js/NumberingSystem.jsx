import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
const NU_LOCALE = 'ar-u-nu-arab';
const formatDay = (day) => day.getDate().toLocaleString(NU_LOCALE);
const formatWeekNumber = (weekNumber) => {
  return weekNumber.toLocaleString(NU_LOCALE);
};
const formatMonthCaption = (date, options) => {
  const y = date.getFullYear().toLocaleString(NU_LOCALE);
  const m = format(date, 'LLLL', { locale: options?.locale });
  return `${m} ${y}`;
};
export function NumberingSystem() {
  return (
    <DayPicker
      locale={arSA}
      dir="rtl"
      showWeekNumber
      formatters={{ formatDay, formatMonthCaption, formatWeekNumber }}
    />
  );
}
