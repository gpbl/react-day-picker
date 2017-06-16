import * as MomentLocaleUtils from '../../src/addons/MomentLocaleUtils';

describe('MomentLocaleUtils', () => {
  describe('formatDay', () => {
    it('should return day as string', () => {
      const date = new Date(2015, 11, 20);
      const formattedDate = MomentLocaleUtils.formatDay(date);
      expect(formattedDate).toBe('Sun Dec 20, 2015');
      const formattedDateIT = MomentLocaleUtils.formatDay(date, 'it');
      expect(formattedDateIT).toBe('dom 20 dic 2015');
    });
  });

  describe('formatMonthTitle', () => {
    it('should return month and day as string', () => {
      const date = new Date('2015-12-20');
      const formattedDate = MomentLocaleUtils.formatMonthTitle(date);
      expect(formattedDate).toBe('December 2015');
      const formattedDateIT = MomentLocaleUtils.formatMonthTitle(date, 'it');
      expect(formattedDateIT).toBe('dicembre 2015');
    });
  });

  describe('formatWeekdayShort', () => {
    it('should return the short day name as string', () => {
      expect(MomentLocaleUtils.formatWeekdayShort(0)).toBe('Su');
      expect(MomentLocaleUtils.formatWeekdayShort(0, 'it')).toBe('do');
    });
  });

  describe('formatWeekdayLong', () => {
    it('should return the long day name as string', () => {
      expect(MomentLocaleUtils.formatWeekdayLong(0)).toBe('Sunday');
      expect(MomentLocaleUtils.formatWeekdayLong(0, 'it')).toBe('domenica');
    });
  });

  describe('getFirstDayOfWeek', () => {
    it('should return monday for it locale', () => {
      expect(MomentLocaleUtils.getFirstDayOfWeek('it')).toBe(1);
    });
    it('should return sunday for en locale', () => {
      expect(MomentLocaleUtils.getFirstDayOfWeek()).toBe(0);
    });
  });

  describe('getMonths', () => {
    it('return twelve months for it locale', () => {
      const months = MomentLocaleUtils.getMonths('it');
      expect(months).toHaveLength(12);
      expect(months[0]).toBe('gennaio');
    });
    it('return twelve months for default locale', () => {
      expect(MomentLocaleUtils.getMonths()).toHaveLength(12);
    });
  });
});
