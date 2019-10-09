import locale from 'date-fns/locale/en-US';
import { startOfMonth, format } from 'date-fns';

import Caption from './Caption';
import Day from './Day';
import Head from './Head';
import Month from './Month';
import Navigation from './Navigation';
import Week from './Week';

function formatDay(day, { locale }) {
  return format(day, 'd', { locale });
}

function formatCaption(month, { locale }) {
  return format(month, 'LLLL yyyy', { locale });
}

function formatWeekdayName(day, { locale }) {
  return format(day, 'E', { locale });
}

function formatWeekNumber(weekNumber) {
  return weekNumber;
}

export default {
  enableOutsideDaysClick: false,
  components: {
    Caption,
    Day,
    Head,
    Month,
    Navigation,
    Week,
  },
  fixedWeeks: false,
  formatCaption,
  formatDay,
  formatWeekdayName,
  formatWeekNumber,
  locale,
  month: startOfMonth(new Date()),
  nextLabel: '▶',
  numberOfMonths: 1,
  pagedNavigation: false,
  prevLabel: '◀',
  reverseMonths: false,
  showCaption: true,
  showHead: true,
  showNavigation: true,
  showOutsideDays: false,
  showWeekNumber: false,
  startDay: new Date(),
  startLabel: '●',
  styles: {},
};
