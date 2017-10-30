function handleDayClick(day, modifiers, e) {
  console.log("Day's modifiers", modifiers);
  console.log("Day's CSS classes", e.target.classList.toString());
}

export default function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2017, 3)}
      selectedDays={[new Date(2017, 3, 12), new Date(2017, 3, 2)]}
      disabledDays={[new Date(2017, 3, 15), { before: new Date(2017, 3, 2) }]}
      onDayClick={handleDayClick}
    />
  );
}
