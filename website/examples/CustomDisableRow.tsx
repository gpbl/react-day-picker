import { differenceInCalendarDays } from "date-fns";
import { DayPicker, Row, RowProps } from "react-day-picker";

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: RowProps) {
  const isPastRow = props.dates.every((date) => isPastDate(date));
  if (isPastRow) return <tr role="presentation" />;
  return <Row {...props} />;
}

export function CustomDisableRow() {
  return (
    <DayPicker
      fromDate={new Date()}
      components={{ Row: OnlyFutureRow }}
      hidden={isPastDate}
      showOutsideDays
      today={new Date(2021, 10, 25)}
    />
  );
}
