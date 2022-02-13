import { enGB, enUS } from 'date-fns/locale';

import { getMonthWeeks } from './getMonthWeeks';

describe('for December 2022 in enUS locale with fixedWeeks', () => {
  const weeks = getMonthWeeks(new Date(2022, 11), true, enUS);
  test('week 1 should be rendered on the 6th row after 49 - 53', () => {
    expect(weeks.map((week) => week.weekNumber)).toEqual([
      49, 50, 51, 52, 53, 1
    ]);
  });
  test('we get a week 53 because we cannot start week 1 until we get to the new year?', () => {
    expect(weeks[4].dates.map((date) => date.getDate())).toEqual([
      25, 26, 27, 28, 29, 30, 31
    ]);
  });
  test('week 1 contains the first day of the new year', () => {
    expect(weeks[5].dates.map((date) => date.getDate())).toEqual([
      1, 2, 3, 4, 5, 6, 7
    ]);
  });
});
describe('for January 2022 in enGB locale', () => {
  const weeks = getMonthWeeks(new Date(2022, 0), false, enGB);
  test('week 52 should be rendered before week 1 through 5', () => {
    expect(weeks.map((week) => week.weekNumber)).toEqual([52, 1, 2, 3, 4, 5]);
  });
  test('perhaps because we cannot have less than 52 weeks in the previous year', () => {
    expect(weeks[0].dates.map((date) => date.getDate())).toEqual([
      27, 28, 29, 30, 31, 1, 2
    ]);
  });
});
describe('for December 2021 in enUS locale', () => {
  const weeks = getMonthWeeks(new Date(2021, 11), false, enGB);
  test('the last days in December are in week 1, which should be after weeks 49 - 52', () => {
    expect(weeks.map((week) => week.weekNumber)).toEqual([49, 50, 51, 52, 1]);
  });
  test('week 1 contains the first day of the new year', () => {
    expect(weeks[4].dates.map((date) => date.getDate())).toEqual([
      26, 27, 28, 29, 30, 31, 1
    ]);
  });
});
