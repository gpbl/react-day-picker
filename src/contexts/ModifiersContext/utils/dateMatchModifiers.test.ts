import { addDays, subDays } from 'date-fns';

import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek
} from '../../../types/matchers';
import { dateMatchModifiers } from './dateMatchModifiers';

const testDay = new Date();

describe('when the matcher is a boolean', () => {
  const matcher = true;
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return the boolean', () => {
    expect(result).toBe(matcher);
  });
});
describe('when matching the same day', () => {
  const matcher = testDay;
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching an array of dates including the day', () => {
  const matcher = [addDays(testDay, -1), testDay, addDays(testDay, 1)];
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching date range', () => {
  const matcher: DateRange = {
    from: testDay,
    to: addDays(testDay, 1)
  };
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching the day of week', () => {
  const matcher: DayOfWeek = {
    dayOfWeek: [testDay.getDay()]
  };
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching date interval (closed)', () => {
  const matcher: DateInterval = {
    before: addDays(testDay, 5),
    after: subDays(testDay, 3)
  };
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true for the included day', () => {
    expect(result).toBe(true);
  });
});

describe('when matching date interval (open)', () => {
  const matcher: DateInterval = {
    before: subDays(testDay, 4),
    after: addDays(testDay, 5)
  };
  test('should return false', () => {
    const result = dateMatchModifiers(testDay, [matcher]);
    expect(result).toBe(false);
  });
  test('should return true for the days before', () => {
    const result = dateMatchModifiers(subDays(testDay, 8), [matcher]);
    expect(result).toBe(true);
  });
  test('should return true for the days after', () => {
    const result = dateMatchModifiers(addDays(testDay, 8), [matcher]);
    expect(result).toBe(true);
  });
});

describe('when matching the date after', () => {
  const matcher: DateAfter = { after: addDays(testDay, -1) };
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching the date before', () => {
  const matcher: DateBefore = { before: addDays(testDay, +1) };
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when the matcher is a function', () => {
  const matcher = () => true;
  const result = dateMatchModifiers(testDay, [matcher]);
  test('should return the result of the function', () => {
    expect(result).toBe(true);
  });
});
