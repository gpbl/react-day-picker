import { endOfWeek, differenceInDays, addDays } from "date-fns";
import { DateWithModifiers } from "../../classes/DateWithModifiers";
import { DayPickerProps } from "../DayPicker";

/**
 * Return the outside ending days for the given day.
 *
 * @private
 */

export function getOutsideEndDays(
  day: DateWithModifiers,
  props: DayPickerProps
): DateWithModifiers[] {
  const { locale } = props;
  const days = [];
  const lastDayOfWeek = endOfWeek(day.date, { locale });
  const endDiff = differenceInDays(lastDayOfWeek, day.date);
  for (let i = 1; i <= endDiff; i++) {
    const dayDate = addDays(day.date, i);
    const hidden = props.toMonth && dayDate > props.toMonth;
    const modifiers = { outsideend: true, hidden };
    const dateWithModifiers = new DateWithModifiers(dayDate, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}
