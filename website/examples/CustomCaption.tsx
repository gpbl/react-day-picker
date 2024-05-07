import { format } from "date-fns";
import { CaptionProps, DayPicker, useNavigation } from "react-day-picker";

function CustomCaptionComponent(props: CaptionProps) {
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
        Caption: CustomCaptionComponent
      }}
    />
  );
}
