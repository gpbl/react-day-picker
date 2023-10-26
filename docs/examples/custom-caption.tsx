import { DayPicker, MonthCaptionProps, useCalendar } from 'react-day-picker';

import { format } from 'date-fns';

function CustomMonthCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useCalendar();
  return (
    <h2>
      {format(props.month.date, 'MMM yyy')}
      <button
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
      >
        Previous
      </button>
      <button
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
      >
        Next
      </button>
    </h2>
  );
}

export default function App() {
  return (
    <DayPicker
      components={{
        Caption: CustomMonthCaption
      }}
    />
  );
}
