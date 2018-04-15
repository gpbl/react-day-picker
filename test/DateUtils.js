import * as DateUtils from '../src/DateUtils';

describe('DateUtils', () => {
  it('should export all the functions', () => {
    const imported = require('../src/DateUtils').default; // eslint-disable-line global-require
    expect(Object.keys(DateUtils).length - 1).toEqual(
      Object.keys(imported).length
    );
  });

  describe('addMonths', () => {
    it('adds a month', () => {
      const date = new Date(2015, 10);
      const newDate = DateUtils.addMonths(date, 1);
      expect(newDate.getMonth()).toBe(date.getMonth() + 1);
    });
    it('should remove two months', () => {
      const date = new Date(2015, 10);
      const newDate = DateUtils.addMonths(date, -2);
      expect(newDate.getMonth()).toBe(8);
    });
    it('should add missing days to the next month', () => {
      const date = new Date(2016, 0, 31);
      const newDate = DateUtils.addMonths(date, 1);
      expect(newDate.getMonth()).toBe(2);
      expect(newDate.getDate()).toBe(2);
    });
  });

  describe('clone', () => {
    it('should clone a date', () => {
      const date = new Date();
      const newDate = DateUtils.clone(date);
      expect(newDate).not.toBe(date);
    });
  });

  describe('isDate', () => {
    it('should detect a valid date', () =>
      expect(DateUtils.isDate(new Date())).toBe(true));
    it('should detect invalid date from String', () =>
      expect(DateUtils.isDate('x')).toBe(false));
    it('should detect invalid date from Object', () =>
      expect(DateUtils.isDate({})).toBe(false));
    it('should detect invalid date from Array', () =>
      expect(DateUtils.isDate([])).toBe(false));
    it('should detect invalid date from `undefined`', () =>
      expect(DateUtils.isDate(undefined)).toBe(false));
    it('should detect invalid date from `null`', () =>
      expect(DateUtils.isDate(null)).toBe(false));
  });

  describe('isDayBefore', () => {
    it('returns true when the day is before the other day', () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 12, 3, 40);
      const isDayBefore = DateUtils.isDayBefore(day1, day2);
      expect(isDayBefore).toBe(true);
    });
    it('returns false for the same day with different times', () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 11, 6, 40);
      const isDayBefore = DateUtils.isDayBefore(day1, day2);
      expect(isDayBefore).toBe(false);
    });
    it('returns false if the second day is after', () => {
      const day1 = new Date(2015, 10, 13, 5, 25);
      const day2 = new Date(2015, 10, 12, 1, 40);
      const isDayBefore = DateUtils.isDayBefore(day1, day2);
      expect(isDayBefore).toBe(false);
    });
  });

  describe('isDayAfter', () => {
    it('returns true when the day is after the other day', () => {
      const day1 = new Date(2015, 10, 13, 5, 25);
      const day2 = new Date(2015, 10, 12, 3, 40);
      const isDayAfter = DateUtils.isDayAfter(day1, day2);
      expect(isDayAfter).toBe(true);
    });
    it('returns false for the same day with different times', () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 11, 6, 40);
      const isDayAfter = DateUtils.isDayAfter(day1, day2);
      expect(isDayAfter).toBe(false);
    });
    it('returns false if the second day is after', () => {
      const day1 = new Date(2015, 10, 12, 5, 25);
      const day2 = new Date(2015, 10, 13, 1, 40);
      const isDayAfter = DateUtils.isDayAfter(day1, day2);
      expect(isDayAfter).toBe(false);
    });
  });

  describe('isSameDay', () => {
    it('returns true if two days differ only by time', () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 11, 7, 40);
      const isSameDay = DateUtils.isSameDay(day1, day2);
      expect(isSameDay).toBe(true);
    });
    it('returns false for different days', () => {
      const day1 = new Date(2015, 8, 12);
      const day2 = new Date(2015, 5, 11);
      const isSameDay = DateUtils.isSameDay(day1, day2);
      expect(isSameDay).toBe(false);
    });
    it('returns false if one of the days is not specified', () => {
      const day1 = new Date(2015, 8, 12);
      const isSameDay = DateUtils.isSameDay(day1, null);
      expect(isSameDay).toBe(false);
    });
  });

  describe('isSameMonth', () => {
    it('returns true if two days differ only by time', () => {
      const day1 = new Date(2015, 10, 11, 5, 25);
      const day2 = new Date(2015, 10, 11, 7, 40);
      const isSameMonth = DateUtils.isSameMonth(day1, day2);
      expect(isSameMonth).toBe(true);
    });
    it('returns true for different days', () => {
      const day1 = new Date(2015, 8, 12);
      const day2 = new Date(2015, 8, 11);
      const isSameMonth = DateUtils.isSameMonth(day1, day2);
      expect(isSameMonth).toBe(true);
    });
    it('returns false if one of the days is not specified', () => {
      const day1 = new Date(2015, 8, 12);
      const isSameMonth = DateUtils.isSameMonth(day1, null);
      expect(isSameMonth).toBe(false);
    });
  });

  describe('isPastDay', () => {
    it('detects a day is in the past', () => {
      const isPastDay = DateUtils.isPastDay(new Date(2015, 5, 11));
      expect(isPastDay).toBe(true);
    });
    it('detects a day in the future', () => {
      const isPastDay = DateUtils.isPastDay(new Date(2100, 1, 11));
      expect(isPastDay).toBe(false);
    });
    it('says today is not a past day', () => {
      const isPastDay = DateUtils.isPastDay(new Date());
      expect(isPastDay).toBe(false);
    });
  });

  describe('isFutureDay', () => {
    it('detects a day is in the future', () => {
      const isFutureDay = DateUtils.isFutureDay(new Date(2040, 5, 11));
      expect(isFutureDay).toBe(true);
    });
    it('detects a day in the past', () => {
      const isFutureDay = DateUtils.isFutureDay(new Date(2001, 1, 11));
      expect(isFutureDay).toBe(false);
    });
    it('says today is not a future day', () => {
      const isFutureDay = DateUtils.isFutureDay(new Date());
      expect(isFutureDay).toBe(false);
    });
  });

  describe('isDayBetween', () => {
    it('detects a day between two days', () => {
      const d = new Date(2015, 10, 12);
      const d1 = new Date(2015, 10, 7);
      const d2 = new Date(2015, 10, 16);
      const isDayBetweenA = DateUtils.isDayBetween(d, d1, d2);
      expect(isDayBetweenA).toBe(true);
      const isDayBetweenB = DateUtils.isDayBetween(d, d2, d1);
      expect(isDayBetweenB).toBe(true);
    });
    it('strictly excludes the given days', () => {
      const d = new Date(2015, 10, 7);
      const d1 = new Date(2015, 10, 7);
      const d2 = new Date(2015, 10, 16);
      const isDayBetween = DateUtils.isDayBetween(d, d1, d2);
      expect(isDayBetween).toBe(false);
    });
  });

  describe('addDayToRange', () => {
    it('set the day as `from` day, if range is missing', () => {
      const day = new Date();
      const range = DateUtils.addDayToRange(day);
      expect(range).toEqual({ from: day, to: null });
    });
    it('set the day as `to` day, if `from` is set', () => {
      const from = new Date(2015, 1, 10);
      const day = new Date();
      const range = DateUtils.addDayToRange(day, { from });
      expect(range).toEqual({ from, to: day });
    });
    it('resets when selecting again the same from day', () => {
      const day = new Date();
      let range = { from: day, to: day };
      range = DateUtils.addDayToRange(day, range);
      expect(range).toEqual({ from: null, to: null });
    });
    it('replaces the first day if given day comes before it ', () => {
      const day = new Date(2015, 10, 1);
      const to = new Date(2015, 10, 20);
      let range = { from: new Date(2015, 10, 5), to };
      range = DateUtils.addDayToRange(day, range);
      expect(range).toEqual({ from: day, to });
    });
    it('set the range to the same day if last day is same as first', () => {
      const day = new Date(2015, 10, 7);
      const to = new Date(2015, 10, 7);
      const from = new Date(2015, 10, 4);
      let range = { from, to };
      range = DateUtils.addDayToRange(day, range);
      expect(range).toEqual({ from: day, to: day });
    });
    it('adds the day to the end of the range', () => {
      const day = new Date(2015, 10, 5);
      const from = new Date(2015, 10, 4);
      let range = { from };
      range = DateUtils.addDayToRange(day, range);
      expect(range).toEqual({ from, to: day });
    });
    it('works when last day comes before the first day', () => {
      const day = new Date(2015, 10, 4);
      const from = new Date(2015, 10, 5);
      let range = { from };
      range = DateUtils.addDayToRange(day, range);
      expect(range).toEqual({ from: day, to: from });
    });
  });

  describe('isDayInRange', () => {
    it('detects a day in a range', () => {
      const day = new Date(2015, 10, 5);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).toBe(true);
    });
    it('detects a day in a range (inclusive)', () => {
      const day = new Date(2015, 10, 4);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).toBe(true);
    });
    it('detects a day outside a range', () => {
      const day = new Date(2015, 10, 15);
      const from = new Date(2015, 10, 4);
      const to = new Date(2015, 10, 6);
      const range = { from, to };
      const isDayInRange = DateUtils.isDayInRange(day, range);
      expect(isDayInRange).toBe(false);
    });
  });
});
