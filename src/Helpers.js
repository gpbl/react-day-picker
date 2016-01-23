
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

export function getWeekArray(d, firstDayOfWeek=getFirstDayOfWeek()) {
  const daysInMonth = getDaysInMonth(d);
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
