import { format } from "date-fns/format";
import { DayPicker, MonthCaption, useCalendar } from "react-day-picker";

function CustomMonthCaption(props: Parameters<typeof MonthCaption>[0]) {
  const { goToMonth, nextMonth, previousMonth } = useCalendar();
  return (
    <h2>
      {format(props.month.date, "MMM yyy")}
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

export function CustomCaption() {
  return (
    <DayPicker
      components={{
        MonthCaption: CustomMonthCaption,
      }}
    />
  );
}
