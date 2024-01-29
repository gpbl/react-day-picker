import { differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row, RowProps } from 'react-day-picker';

function isPastDate(date: Date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props: RowProps) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

export default function App() {
  return (
    <DayPicker
      fromDate={new Date()}
      components={{ Row: OnlyFutureRow }}
      hidden={isPastDate}
      showOutsideDays
    />
  );
}
