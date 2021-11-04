import { enGB, enUS } from 'date-fns/locale';
import { getWeeks } from './getWeeks';

describe('It should render weeks at the boundaries of years correctly', () => {
  test('If the first days of the month start at week 52 from the previous year, week 52 should be rendered on the 1st row', () => {
    const weeks = getWeeks(new Date(2022, 0), { locale: enGB });
    expect(weeks.map((week) => week.weekNumber)).toEqual([52, 1, 2, 3, 4, 5]);
    expect(weeks[0].dates.map((date) => date.getDate())).toEqual([
      27, 28, 29, 30, 31, 1, 2
    ]);
  });

  test('If there is a week 53, and we show week 1 afterwards, week 1 should be rendered on the 6th row', () => {
    const weeks = getWeeks(new Date(2022, 11), {
      locale: enUS,
      fixedWeeks: true
    });
    expect(weeks.map((week) => week.weekNumber)).toEqual([
      49, 50, 51, 52, 53, 1
    ]);
    expect(weeks[5].dates.map((date) => date.getDate())).toEqual([
      1, 2, 3, 4, 5, 6, 7
    ]);
  });

  test('If the last week of the year is 1, it should be rendered on the 5th row', () => {
    const weeks = getWeeks(new Date(2021, 11), { locale: enUS });
    expect(weeks.map((week) => week.weekNumber)).toEqual([49, 50, 51, 52, 1]);
    expect(weeks[4].dates.map((date) => date.getDate())).toEqual([
      26, 27, 28, 29, 30, 31, 1
    ]);
  });
});
