/* eslint-disable global-require */
import * as LocaleUtils from '../src/LocaleUtils';

describe('LocaleUtils', () => {
  it('should export all the functions', () => {
    const imported = require('../src/LocaleUtils').default; // eslint-disable-line global-require
    expect(Object.keys(LocaleUtils).length - 1).toEqual(
      Object.keys(imported).length
    );
  });

  describe('formatMonthTitle', () => {
    it('returns month and day as string', () => {
      const date = new Date(2015, 11, 20);
      const formattedDate = LocaleUtils.formatMonthTitle(date);
      expect(formattedDate).toBe('December 2015');
    });
  });

  describe('formatWeekdayShort', () => {
    it('returns the short day name as string', () => {
      expect(LocaleUtils.formatWeekdayShort(0)).toBe('Su');
    });
  });

  describe('formatWeekdayLong', () => {
    it('returns the long day name as string', () => {
      expect(LocaleUtils.formatWeekdayLong(0)).toBe('Sunday');
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('returns sunday', () => {
      expect(LocaleUtils.getFirstDayOfWeek()).toBe(0);
    });
  });

  describe('getMonths', () => {
    it('return twelve months', () => {
      expect(LocaleUtils.getMonths()).toHaveLength(12);
    });
  });
});
