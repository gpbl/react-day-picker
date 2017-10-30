export default function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2017, 3)}
      disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
    />
  );
}
