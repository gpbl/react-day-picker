export function getBroadcastWeeksInMonth(month: Date): number {
  const NUMBER_OF_5_WEEKS = 5;
  const NUMBER_OF_4_WEEKS = 4;

  const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  const dayOfWeekOfFirstDayOfMonth =
    firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
  const beginDate = new Date(
    month.getFullYear(),
    month.getMonth(),
    month.getDate() - dayOfWeekOfFirstDayOfMonth + 1
  );
  const numberOfWeeks =
    month.getMonth() ===
    new Date(
      beginDate.getFullYear(),
      beginDate.getMonth(),
      beginDate.getDate() + NUMBER_OF_5_WEEKS * 7 - 1
    ).getMonth()
      ? NUMBER_OF_5_WEEKS
      : NUMBER_OF_4_WEEKS;
  return numberOfWeeks;
}

export function startOfBroadcastWeek(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstOfMonth = new Date(year, month, 1);
  const dayOfWeek = firstOfMonth.getUTCDay(); // 0 = Sunday, 1 = Monday, etc.

  // If the first of the month is a Monday, then the broadcast month starts on that day.
  // Otherwise, the broadcast starts on the previous Monday, and if first of the month is Sunday, then the starts on the previous week's Monday.
  if (dayOfWeek === 1) {
    return firstOfMonth;
  } else if (dayOfWeek === 0) {
    const startDate = new Date(year, month, 1 - dayOfWeek + 1 - 7);
    return startDate;
  } else {
    const startDate = new Date(year, month, 1 - dayOfWeek + 1);
    return startDate;
  }
}

export function endOfBroadcastWeek(date: Date): Date {
  const startDate = startOfBroadcastWeek(date);
  // end date based on the weeks to show, it is calculated by getBroadcastWeeksInMonth
  const numberOfWeeks = getBroadcastWeeksInMonth(date);
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + numberOfWeeks * 7 - 1
  );
  return endDate;
}
