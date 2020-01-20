import * as DateFns from "date-fns";
import { DayPickerProps } from "../DayPicker";

/**
 * @private
 * @category Components
 */
export function getWeekdaysNames(
  locale: DateFns.Locale,
  format: DayPickerProps["formatCaption"]
): Array<string> {
  const start = DateFns.startOfWeek(new Date(), { locale });
  const names = [];
  for (let i = 0; i < 7; i++) {
    const day = DateFns.addDays(start, i);
    names.push(format(day, { locale }));
  }
  return names;
}
