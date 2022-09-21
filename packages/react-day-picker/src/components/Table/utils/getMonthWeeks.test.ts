import { enGB, enUS } from 'date-fns/locale';

import { getMonthWeeks } from './getMonthWeeks';

describe('when using the "enUS" locale', () => {
  const locale = enUS;
  describe('when using fixed weeks', () => {
    const useFixedWeeks = true;
    describe('when getting the weeks for December 2022', () => {
      const date = new Date(2022, 11);
      const weeks = getMonthWeeks(date, { useFixedWeeks, locale });
      test('should return 49 - 1 week numbers', () => {
        const weekNumbers = weeks.map((week) => week.weekNumber);
        const expectedResult = [49, 50, 51, 52, 53, 1];
        expect(weekNumbers).toEqual(expectedResult);
      });
      test('the last week should be the one in the next year', () => {
        const lastWeek = weeks[weeks.length - 1];
        const lastWeekDates = lastWeek.dates.map((date) => date.getDate());
        const expectedResult = [1, 2, 3, 4, 5, 6, 7];
        expect(lastWeekDates).toEqual(expectedResult);
      });
    });
    describe('when getting the weeks for December 2021', () => {
      const weeks = getMonthWeeks(new Date(2021, 11), {
        useFixedWeeks: false,
        locale: enUS
      });
      test('should return 49 - 1 week numbers', () => {
        const weekNumbers = weeks.map((week) => week.weekNumber);
        const expectedResult = [49, 50, 51, 52, 1];
        expect(weekNumbers).toEqual(expectedResult);
      });
      test('the last week should be the last in the year', () => {
        const lastWeek = weeks[weeks.length - 1];
        const lastWeekDates = lastWeek.dates.map((date) => date.getDate());
        const expectedResult = [26, 27, 28, 29, 30, 31, 1];
        expect(lastWeekDates).toEqual(expectedResult);
      });
      test('week 1 contains the first day of the new year', () => {
        expect(weeks[4].dates.map((date) => date.getDate())).toEqual([
          26, 27, 28, 29, 30, 31, 1
        ]);
      });
    });
  });
});

describe('when using the "enGB" locale', () => {
  const locale = enGB;
  describe('when getting the weeks for January 2022', () => {
    const date = new Date(2022, 0);
    const weeks = getMonthWeeks(date, { locale });
    test('the first week should be the last of the previous year', () => {
      const weekNumbers = weeks.map((week) => week.weekNumber);
      expect(weekNumbers[0]).toEqual(52);
    });
    test('the first week should contain days from previous year', () => {
      expect(weeks[0].dates.map((date) => date.getDate())).toEqual([
        27, 28, 29, 30, 31, 1, 2
      ]);
    });
    test('the first week should be the last of January', () => {
      const weekNumbers = weeks.map((week) => week.weekNumber);
      expect(weekNumbers[weekNumbers.length - 1]).toEqual(5);
    });
  });
  describe('when setting a 3 as first day of year', () => {
    const date = new Date(2022, 0);
    const weeks = getMonthWeeks(date, { locale, firstWeekContainsDate: 3 });
    test('the number of week should be 53', () => {
      const weekNumbers = weeks.map((week) => week.weekNumber);
      expect(weekNumbers[0]).toEqual(53);
    });
  });
});
