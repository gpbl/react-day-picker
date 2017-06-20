export default function Example() {
  return (
    <DayPicker
      showWeekNumbers
      onWeekClick={(week, days) => console.log(week, days)}
    />
  );
}
