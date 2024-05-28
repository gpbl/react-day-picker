import { DayPicker } from "react-day-picker";

/** Test for the next focus day to not cause an infinite recursion. */
export function FocusRecursive() {
  const disabledDays = [
    new Date(2022, 5, 4),
    {
      after: new Date(2022, 5, 26)
    }
  ];

  return (
    <DayPicker
      today={new Date(2022, 5, 1)}
      defaultMonth={new Date(2022, 5)}
      disabled={disabledDays}
      mode="single"
    />
  );
}
