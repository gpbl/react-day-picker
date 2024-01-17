import { differenceInCalendarDays } from 'date-fns';
import { DayPicker, WeekRow, WeekRowProps } from 'react-day-picker';

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: WeekRowProps) {
  const isPastRow = props.week.days.every((day) => isPastDate(day.date));
  if (isPastRow)
    return (
      <div role="row" aria-rowindex={props['aria-rowindex']} aria-hidden></div>
    );
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
