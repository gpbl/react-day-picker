import { es } from 'date-fns/locale';

import { labelDay } from './labelDay';

import type { Modifiers } from '../types';

const day = new Date(2022, 10, 21);
const modifiers: Modifiers = {
  outside: false,
  disabled: false,
  selected: false,
  hidden: false,
  today: false,
  range_start: false,
  range_end: false,
  range_middle: false
};
test('should return the day label', () => {
  expect(labelDay(day, modifiers, { locale: es })).toEqual(
    '21º noviembre (lunes)'
  );
});
