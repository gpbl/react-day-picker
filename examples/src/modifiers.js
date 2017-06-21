export default function Example() {
  const modifiers = {
    disabled: { daysOfWeek: [6] },
    birthday: new Date(2018, 8, 19),
    mondays: { daysOfWeek: [1] },
  };
  return <DayPicker month={new Date(2018, 8)} modifiers={modifiers} />;
}
