import { es } from 'date-fns/locale';

import { labelDay } from './labelDay';

import type { Modifiers } from '../types';

const day = new Date(2022, 10, 21);
const modifiers: Modifiers = {
  disabled: false,
  excluded: false,
  focusable: false,
  hidden: false,
  outside: false,
  range_end: false,
  range_middle: false,
  range_start: false,
  selected: false,
  today: false
};
test('should return the day label', () => {
  expect(labelDay(day, modifiers, { locale: es })).toEqual(
    '21º noviembre (lunes)'
  );
});
