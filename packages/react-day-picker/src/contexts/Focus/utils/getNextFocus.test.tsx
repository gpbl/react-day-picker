import { addDays, parse, parseISO } from 'date-fns';

import { DayPickerContextValue } from 'contexts/DayPicker';

import {
  getNextFocus,
  MoveFocusBy,
  MoveFocusDirection,
  MoveFocusOptions
} from './getNextFocus';

type test = [
  focusedDay: string,
  moveBy: MoveFocusBy,
  moveDirection: MoveFocusDirection,
  options: MoveFocusOptions,
  expectedNextFocus: string
];

const tests: test[] = [['2022-08-17', 'day', 'after', {}, '2022-08-18']];

describe.each(tests)(
  'when moving focus from %s by a %s %s',
  (focusedDay, moveBy, moveDirection, options, expectedNextFocus) => {
    test(`should return ${expectedNextFocus}`, () => {
      const nextFocus = getNextFocus(
        parseISO(focusedDay),
        moveBy,
        moveDirection,
        options
      );
      expect(nextFocus).toStrictEqual(parseISO(expectedNextFocus));
    });
  }
);
