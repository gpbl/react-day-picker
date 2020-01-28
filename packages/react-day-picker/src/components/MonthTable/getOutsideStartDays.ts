import { startOfWeek, differenceInDays, addDays } from "date-fns";
import { DateWithModifiers } from "../../classes/DateWithModifiers";
import { DayPickerProps } from "../DayPicker";

/**
 * Return the outside starting days for the given day.
 *
 * @private
 */
export function getOutsideStartDays(
  day: DateWithModifiers,
  props: DayPickerProps
): DateWithModifiers[] {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(day.date, { locale });
  const startDiff = differenceInDays(day.date, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const newDay = addDays(firstDayOfWeek, i);
    const hidden = props.fromMonth && newDay < props.fromMonth;
    const modifiers = { outsidestart: true, hidden };
    const dateWithModifiers = new DateWithModifiers(newDay, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}
