import { startOfWeek, differenceInDays, addDays } from "date-fns";
import { DateWithModifiers } from "../../classes";
import { DayPickerProps } from "../DayPicker";

export function getOutsideStartDays(
  day: DateWithModifiers,
  props: DayPickerProps
): Array<DateWithModifiers> {
  const { locale } = props;
  const days = [];
  const firstDayOfWeek = startOfWeek(day.date, { locale });
  const startDiff = differenceInDays(day.date, firstDayOfWeek);

  for (let i = 0; i < startDiff; i++) {
    const day = addDays(firstDayOfWeek, i);
    const hidden = props.fromMonth && day < props.fromMonth;
    const modifiers = { outside: "start", hidden };
    const dateWithModifiers = new DateWithModifiers(day, modifiers, props);
    days.push(dateWithModifiers);
  }
  return days;
}
