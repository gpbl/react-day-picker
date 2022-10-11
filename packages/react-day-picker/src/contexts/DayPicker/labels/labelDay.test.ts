import { labelDay } from './labelDay';

const day = new Date(2022, 10, 21);

test('should return the day label', () => {
  expect(labelDay(day, {})).toEqual('21st November 2022 (Monday)');
});
