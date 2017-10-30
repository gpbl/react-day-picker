export default function Example() {
  return (
    <DayPicker
      numberOfMonths={12}
      month={new Date(2018, 0)}
      pagedNavigation
      reverseMonths
      fixedWeeks
    />
  );
}
