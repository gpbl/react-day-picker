import { getFirstDayOfWeek } from "./LocaleUtils";

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
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
  },

  getFirstDayOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getDaysInMonth(d) {
    let resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getWeekArray(d, locale="en") {
    const daysInMonth = this.getDaysInMonth(d);

    let dayArray = [];
    let daysInWeek;
    let firstDayOfWeek;
    let week;
    let weekArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
    }

    while (dayArray.length) {
      firstDayOfWeek = dayArray[0].getDay();
      daysInWeek = 7 - firstDayOfWeek + getFirstDayOfWeek(locale);

      week = dayArray.splice(0, daysInWeek);

      // unshift days to start the first week
      for (let i = 0; i < 7 - daysInWeek; i++) {
        let outsideDate = this.clone(week[0]);
        outsideDate.setDate(week[0].getDate() - 1);
        week.unshift(outsideDate);
      }

      // push days to close the last week
      for (let i = week.length; i < 7; i++) {
        const lastDay = week[week.length - 1];
        let outsideDate = this.clone(lastDay);
        outsideDate.setDate(lastDay.getDate() + 1);
        week.push(outsideDate);

      }
      weekArray.push(week);
    }

    return weekArray;
  },

  getModifiersForDay(d, modifierFunctions) {
    let modifiers = [];
    if (modifierFunctions) {
      for (let modifier in modifierFunctions) {
        let func = modifierFunctions[modifier];
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
  }

};

export default Utils;
