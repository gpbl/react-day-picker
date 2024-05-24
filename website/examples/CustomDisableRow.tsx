import { differenceInCalendarDays } from "date-fns";
import { DayPicker, WeekRow, WeekRowProps } from "react-day-picker";

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: WeekRowProps) {
  const isPastRow = props.dates.every((date) => isPastDate(date));
  if (isPastRow) return <tr role="presentation" />;
  return <WeekRow {...props} />;
}

export function CustomDisableRow() {
  return (
    <DayPicker
      fromDate={new Date()}
      components={{ WeekRow: OnlyFutureRow }}
      hidden={isPastDate}
      showOutsideDays
      today={new Date(2021, 10, 25)}
    />
  );
}
