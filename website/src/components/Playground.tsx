import { DayPicker } from 'react-day-picker';

export function Playground() {
  return (
    <DayPicker
      modifiers={{
        test: { before: new Date() }
      }}
    />
  );
}
