import { DateRange } from 'index';

import { isDateInRange } from './isDateInRange';

const date = new Date();

describe('when range is missing the "from" date', () => {
  const range: DateRange = { from: undefined };
  const result = isDateInRange(date, range);
  test('should return false', () => {
    expect(result).toBe(false);
  });
});

describe('when range is missing the "to" date', () => {
  const to = undefined;
  describe('when the from date is the same as date', () => {
    const range: DateRange = { from: date, to };
    const result = isDateInRange(date, range);
    test('should return true', () => {
      expect(result).toBe(true);
    });
  });
  const result = isDateInRange(date, { from: undefined });
  test('should return false', () => {
    expect(result).toBe(false);
  });
});
