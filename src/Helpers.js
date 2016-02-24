
import { clone } from "./DateUtils";
import { getFirstDayOfWeek } from "./LocaleUtils";

export function startOfMonth(d) {
  const newDate = clone(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

export function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

export function getDaysInMonth(d) {
  const resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

export function getWeekArray(d, firstDayOfWeek=getFirstDayOfWeek(), minWeeks=0) {
  const daysInMonth = getDaysInMonth(d);
  const dayArray = [];

  let week = [];
  const weekArray = [];

  // populate dayArray with an array of dates 
  // for each day of the month, setting the time at noon
  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  // use the dayArray to populate the weekArray, a collection
  // of arrays containing date objects
  dayArray.forEach((day) => {
    // bounds check, start a new week if day is first day of the week
    if(week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    // add the current day to the current week
    week.push(day);
    // if the current day is the last day of the month,
    // add the current week to the weeksArray
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  const firstWeek = weekArray[0];
  for (let i = 7 - firstWeek.length; i > 0; i--) {
    const outsideDate = clone(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  const lastWeek = weekArray[weekArray.length - 1];
  for (let i = lastWeek.length; i < 7; i++) {
    const outsideDate = clone(lastWeek[lastWeek.length - 1]);
    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(outsideDate);
  }

  // if minWeeks hasn't been met yet, continue adding days until
  // the minimum has been met
  if (weekArray.length < minWeeks) {
    const lastWeekIndex = weekArray.length - 1;
    const lastDayIndex = weekArray[lastWeekIndex].length - 1
    const lastDay = weekArray[lastWeekIndex][lastDayIndex];
    const numWeeksToAdd = minWeeks - weekArray.length;
    // for each week that needs to be added, populate a new
    // week array and add it to the weeksArray
    for (let weekNum = 0; weekNum < numWeeksToAdd; weekNum++) {
      week = [];
      // for each day in the week, increment the lastDay by 1 day
      // and append it to the week array
      for (let dayNum = 0; dayNum < 7; dayNum++) {
        lastDay.setDate(lastDay.getDate() + 1);
        week.push(clone(lastDay))
      }
      weekArray.push(week);
    }
  }

  return weekArray;
}

export function getModifiersForDay(d, modifierFunctions) {
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
}

export function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() +
    (12 * (d2.getFullYear() - d1.getFullYear()));
}
