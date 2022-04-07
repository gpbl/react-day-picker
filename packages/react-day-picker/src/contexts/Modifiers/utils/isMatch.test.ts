import { addDays } from 'date-fns';

import {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek
} from 'types/Matchers';

import { isMatch } from './isMatch';

const testDay = new Date();

describe('when the matcher is a boolean', () => {
  const matcher = true;
  const result = isMatch(testDay, [matcher]);
  test('should return the boolean', () => {
    expect(result).toBe(matcher);
  });
});
describe('when matching the same day', () => {
  const matcher = testDay;
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching an array of dates including the day', () => {
  const matcher = [addDays(testDay, -1), testDay, addDays(testDay, 1)];
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching date range', () => {
  const matcher: DateRange = {
    from: testDay,
    to: addDays(testDay, 1)
  };
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching the day of week', () => {
  const matcher: DayOfWeek = {
    dayOfWeek: [testDay.getDay()]
  };
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching date interval', () => {
  const matcher: DateInterval = {
    after: addDays(testDay, -1),
    before: addDays(testDay, 1)
  };
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching the date after', () => {
  const matcher: DateAfter = { after: addDays(testDay, -1) };
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when matching the date before', () => {
  const matcher: DateBefore = { before: addDays(testDay, +1) };
  const result = isMatch(testDay, [matcher]);
  test('should return true', () => {
    expect(result).toBe(true);
  });
});

describe('when the matcher is a function', () => {
  const matcher = () => true;
  const result = isMatch(testDay, [matcher]);
  test('should return the result of the function', () => {
    expect(result).toBe(true);
  });
});
