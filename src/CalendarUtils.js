
const CalendarUtils = {

  // return an array of the weeks (array of days) in a month

  weeks(m) {

    const firstOfMonth = m.clone().startOf('month');
    const lastOfMonth = m.clone().endOf('month');

    var currentDay = firstOfMonth.clone().utc();
    var currentWeek = [];
    var weeksInMonth = [];

    while (currentDay < lastOfMonth) {
      currentWeek.push(currentDay.clone());
      currentDay.add(1, 'd');

      if (currentDay.weekday() === 0 || currentDay > lastOfMonth) {
        weeksInMonth.push(currentWeek);
        currentWeek = [];
      }
    }

    return weeksInMonth;
  }

};

export default CalendarUtils;
