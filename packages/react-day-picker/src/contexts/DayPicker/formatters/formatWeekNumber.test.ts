import es from 'date-fns/locale/es';

import { formatWeekNumber } from './formatWeekNumber';

test('should return the formatted week number', () => {
  expect(formatWeekNumber(10)).toEqual('10');
});
