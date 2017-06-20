export default function Example() {
  const modifiers = {
    mondays: { daysOfWeek: [1] },
    birthday: new Date(2018, 8, 19),
  };
  return <DayPicker month={new Date(2018, 8)} modifiers={modifiers} />;
}
