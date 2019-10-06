import { startOfWeek, addDays, format } from 'date-fns';

const date = new Date();

function getWeekdaysNames(locale) {
  const start = startOfWeek(date, { locale });
  const names = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    names.push(format(day, 'E', { locale }));
  }
  return names;
}

export default getWeekdaysNames;
