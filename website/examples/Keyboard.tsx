import { DayPicker, DayPickerProps, Mode } from "react-day-picker";

export function Keyboard(props: DayPickerProps<Mode>) {
  return <DayPicker {...props} today={new Date(2022, 5, 10)} />;
}
