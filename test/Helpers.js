import * as Helpers from '../src/Helpers';

describe('Helpers', () => {
  describe('cancelEvent', () => {
    it('should prevent default and stop propagation', () => {
      const e = { preventDefault: () => {}, stopPropagation: () => {} };
      const preventDefault = jest.spyOn(e, 'preventDefault');
      const stopPropagation = jest.spyOn(e, 'stopPropagation');
      Helpers.cancelEvent(e);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('getFirstDayOfWeekFromProps', () => {
    it('should return Sunday as default', () => {
      expect(Helpers.getFirstDayOfWeekFromProps({})).toBe(0);
    });

    it('should return the day from localeUtils first', () => {
      const localeUtils = { getFirstDayOfWeek: () => 3 };
      expect(Helpers.getFirstDayOfWeekFromProps({ localeUtils })).toBe(3);
    });
    it('should return the day from a number', () => {
      expect(Helpers.getFirstDayOfWeekFromProps({ firstDayOfWeek: 5 })).toBe(5);
    });
  });

  describe('getDaysInMonth', () => {
    it('get the correct number of days', () => {
      const date = new Date(2015, 1, 10);
      expect(Helpers.getDaysInMonth(date)).toBe(28);
      const date1 = new Date(2016, 2, 10);
      expect(Helpers.getDaysInMonth(date1)).toBe(31);
      const date2 = new Date(2016, 3, 10);
      expect(Helpers.getDaysInMonth(date2)).toBe(30);
    });
    it('get the correct number of days in a leap month', () => {
      const date = new Date(2016, 1, 10);
      expect(Helpers.getDaysInMonth(date)).toBe(29);
    });
  });

  describe('getFirstDayOfMonth', () => {
    it('get the first day of the month', () => {
      const date1 = new Date(1979, 8, 19);
      expect(Helpers.getFirstDayOfMonth(date1).getDate()).toBe(1);
      const date2 = new Date(1979, 8, 1);
      expect(Helpers.getFirstDayOfMonth(date2).getDate()).toBe(1);
    });
  });

  describe('getMonthsDiff', () => {
    it('returns a positive difference between two days in the same year', () => {
      const d1 = new Date(2015, 10, 6);
      const d2 = new Date(2015, 11, 6);
      expect(Helpers.getMonthsDiff(d1, d2)).toBe(1);
    });
    it('returns a positive difference between two days in different years', () => {
      const d1 = new Date(2015, 11, 6);
      const d2 = new Date(2016, 0, 6);
      expect(Helpers.getMonthsDiff(d1, d2)).toBe(1);
    });
    it('returns a negative difference between two days in the same year', () => {
      const d1 = new Date(2015, 3, 6);
      const d2 = new Date(2015, 2, 6);
      expect(Helpers.getMonthsDiff(d1, d2)).toBe(-1);
    });
    it('returns a negative difference between two days in different years', () => {
      const d1 = new Date(2017, 3, 6);
      const d2 = new Date(2015, 2, 6);
      expect(Helpers.getMonthsDiff(d1, d2)).toBe(-25);
    });
    it('returns no difference between two days in the same month', () => {
      const d1 = new Date(2015, 3, 6);
      const d2 = new Date(2015, 3, 12);
      expect(Helpers.getMonthsDiff(d1, d2)).toBe(0);
    });
  });

  describe('getWeekArray', () => {
    it('works with a month starting on sunday (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 10, 1));
      expect(weeks).toHaveLength(5);
      expect(weeks[0][0].getDay()).toBe(0);
      expect(weeks[0][0].getDate()).toBe(1);
      expect(weeks[0][0].getMonth()).toBe(10);
      expect(weeks[0][0].getFullYear()).toBe(2015);
    });

    it('adds days from the previous month to the first week (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 4, 10));

      expect(weeks).toHaveLength(6);

      // should go back to april
      const firstDay = weeks[0][0];
      expect(firstDay.getDay()).toBe(0);
      expect(firstDay.getDate()).toBe(26);
      expect(firstDay.getMonth()).toBe(3);
      expect(firstDay.getFullYear()).toBe(2015);
    });

    it('adds days from the next month to the last week (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 8, 19));

      expect(weeks).toHaveLength(5);
      // go to october
      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).toBe(3);
      expect(lastDay.getMonth()).toBe(9);
      expect(lastDay.getFullYear()).toBe(2015);
    });

    it('adds days from the next month to the last week (it)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 8, 19), 1);

      expect(weeks).toHaveLength(5);

      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).toBe(4);
      expect(lastDay.getMonth()).toBe(9);
      expect(lastDay.getFullYear()).toBe(2015);
    });

    it('returns 7 days per week when starting day is sunday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1));
      expect(weeks).toHaveLength(5);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });

    it('returns 7 days per week when starting day is monday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1), 1);
      expect(weeks).toHaveLength(5);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });

    it('returns 7 days per week when starting day is saturday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1), 6);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });
  });

  describe('isRangeOfDates', () => {
    it('should detect a properly shaped object', () => {
      expect(
        Helpers.isRangeOfDates({
          from: new Date(),
          to: new Date(),
        })
      ).toBe(true);
    });
    it('should detect not properly shaped objects', () => {
      expect(
        Helpers.isRangeOfDates({
          from: null,
          to: new Date(),
        })
      ).toBe(false);
      expect(Helpers.isRangeOfDates({ to: new Date() })).toBe(false);
      expect(Helpers.isRangeOfDates({ from: new Date() })).toBe(false);
    });
  });

  describe('startOfMonth', () => {
    it('should set a date as start of its month', () => {
      const date = new Date(1979, 8, 19);
      const newDate = Helpers.startOfMonth(date);

      expect(newDate.getFullYear()).toBe(1979);
      expect(newDate.getMonth()).toBe(8);
      expect(newDate.getDate()).toBe(1);
      expect(newDate.getHours()).toBe(12);
      expect(newDate.getMinutes()).toBe(0);
      expect(newDate.getSeconds()).toBe(0);
      expect(newDate.getMilliseconds()).toBe(0);
    });
  });
});
