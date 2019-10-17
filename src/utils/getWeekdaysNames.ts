import { startOfWeek, addDays } from 'date-fns';
import { DayPickerProps } from '../../typings/react-day-picker';
const date = new Date();

export function getWeekdaysNames(
  locale: Locale,
  format: ReactDayPicker.DayPickerProps['formatCaption']
): Array<string> {
  const start = startOfWeek(date, { locale });
  const names = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    names.push(format(day, { locale }));
  }
  return names;
}
