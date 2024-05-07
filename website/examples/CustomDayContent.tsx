import { DayContentProps, DayPicker } from "react-day-picker";

function DayContent(props: DayContentProps) {
  return (
    <span style={{ position: "relative", overflow: "visible" }}>
      {props.date.getDate() === 19 ? ` 🎉` : props.date.getDate()}
    </span>
  );
}

export function CustomDayContent() {
  return <DayPicker components={{ DayContent }} />;
}
