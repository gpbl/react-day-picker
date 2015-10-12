const WEEKDAYS_LONG = ["Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday"];

const WEEKDAYS_SHORT = ["Su", "Mo", "Tu",
  "We", "Th", "Fr", "Sa"];

const MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const LABELS = {
  NEXT: "Next",
  PREV: "Previous"
};


const Utils = {

  addMonths(d, months) {
    const newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  clone(d) {
    return new Date(d.getTime());
  },

  startOfMonth(d) {
    const newDate = this.clone(d);
    newDate.setDate(1);
    newDate.setHours(12); // always set noon to avoid time zone issues
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
  },

  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1, 12);
  },

  getDaysInMonth(d) {
    const resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getWeekArray(d, firstDayOfWeek) {
    const daysInMonth = this.getDaysInMonth(d);
    if (arguments.length === 1) {
      firstDayOfWeek = this.getFirstDayOfWeek();
    }
    const dayArray = [];
    let week = [];
    const weekArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
    }

    dayArray.forEach((day) => {
      if(week.length > 0 && day.getDay() === firstDayOfWeek) {
        weekArray.push(week);
        week = [];
      }
      week.push(day);
      if (dayArray.indexOf(day) === dayArray.length - 1) {
        weekArray.push(week);
      }
    });

    // unshift days to start the first week
    const firstWeek = weekArray[0];
    for (let i = 7 - firstWeek.length; i > 0; i--) {
      const outsideDate = this.clone(firstWeek[0]);
      outsideDate.setDate(firstWeek[0].getDate() - 1);
      firstWeek.unshift(outsideDate);
    }

    // push days until the end of the last week
    const lastWeek = weekArray[weekArray.length - 1];
    for (let i = lastWeek.length; i < 7; i++) {
      const outsideDate = this.clone(lastWeek[lastWeek.length - 1]);
      outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
      lastWeek.push(outsideDate);
    }

    return weekArray;

  },

  getModifiersForDay(d, modifierFunctions) {
    const modifiers = [];
    if (modifierFunctions) {
      for (const modifier in modifierFunctions) {
        const func = modifierFunctions[modifier];
        if (func(d)) {
          modifiers.push(modifier);
        }
      }
    }
    return modifiers;
  },

  isDayOutsideMonth(d1, d2) {
    return d1.getMonth() !== d2.getMonth();
  },

  isSameDay(d1, d2) {
    return d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear();
  },

  formatMonthTitle(d) {
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  },

  formatWeekdayShort(i) {
    return WEEKDAYS_SHORT[i];
  },

  formatWeekdayLong(i) {
    return WEEKDAYS_LONG[i];
  },

  getFirstDayOfWeek() {
    return 0;
  },

  getMonthsDiff(d1, d2) {
    return d2.getMonth() - d1.getMonth() + (12 * (d2.getFullYear() - d1.getFullYear()));
  },

  getNextLabel() {
    return LABELS.NEXT;
  },

  getPreviousLabel() {
    return LABELS.PREV;
  }

};

export default Utils;
