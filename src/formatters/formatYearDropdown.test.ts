import { formatYearDropdown } from './formatYearDropdown';

const date = new Date(2022, 10, 21);

test('should return the formatted weekday name', () => {
  expect(formatYearDropdown(date)).toEqual('2022');
});
