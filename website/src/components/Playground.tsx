import { DayPicker } from 'react-day-picker';

export function Playground() {
  return (
    <DayPicker
      onDayMouseLeave={}
      modifiers={{
        test: { before: new Date() }
      }}
    />
  );
}
