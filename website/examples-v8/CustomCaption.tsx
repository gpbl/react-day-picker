import { format } from "date-fns";

import {
  MonthCaptionProps,
  DayPicker,
  useNavigation
} from "./react-day-picker-v8";

function CustomMonthCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <h2>
      {format(props.displayMonth, "MMM yyy")}
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
        MonthCaption: CustomMonthCaption
      }}
    />
  );
}
