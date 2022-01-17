import { freezeBeforeAll } from 'test/utils';

import { getWeekdays } from './getWeekdays';

const today = new Date(2022, 1, 12);
const prevSunday = new Date(2022, 1, 6);

freezeBeforeAll(today);

let result: Date[];

describe('when rendered without a locale', () => {
  beforeEach(() => {
    result = getWeekdays();
  });
  test('should return 7 days', () => {
    expect(result).toHaveLength(7);
  });
  test('should return Sunday as first day', () => {
    expect(result[0]).toEqual(prevSunday);
  });
});
