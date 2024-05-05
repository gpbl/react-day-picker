import { format } from "date-fns";
import { DayContent, DayContentProps, DayPicker } from "react-day-picker";

function DateTime(props: DayContentProps) {
  const dateTime = format(props.date, "yyyy-MM-dd");
  return (
    <time dateTime={dateTime}>
      <DayContent {...props} />
    </time>
  );
}

export function CustomDay() {
  return <DayPicker components={{ DayContent: DateTime }} />;
}
