/* eslint-disable jest/no-standalone-expect */
import { addDays, format, parseISO } from 'date-fns';

import {
  getNextFocus,
  MoveFocusBy,
  MoveFocusDirection,
  MoveFocusOptions
} from './getNextFocus';

type test = {
  focusedDay: string;
  moveBy: MoveFocusBy;
  moveDirection: MoveFocusDirection;
  options: MoveFocusOptions;
  expectedNextFocus: string;
};

const tests: test[] = [
  {
    focusedDay: '2022-08-17',
    moveBy: 'day',
    moveDirection: 'after',
    options: {},
    expectedNextFocus: '2022-08-18'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'day',
    moveDirection: 'before',
    options: {},
    expectedNextFocus: '2022-08-16'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'week',
    moveDirection: 'after',
    options: {},
    expectedNextFocus: '2022-08-24'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'week',
    moveDirection: 'before',
    options: {},
    expectedNextFocus: '2022-08-10'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'month',
    moveDirection: 'after',
    options: {},
    expectedNextFocus: '2022-09-17'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'startOfWeek',
    moveDirection: 'before',
    options: {
      weekStartsOn: 1
    },
    expectedNextFocus: '2022-08-15'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'endOfWeek',
    moveDirection: 'before',
    options: {
      weekStartsOn: 1
    },
    expectedNextFocus: '2022-08-21'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'month',
    moveDirection: 'after',
    options: {},
    expectedNextFocus: '2022-09-17'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'year',
    moveDirection: 'before',
    options: {},
    expectedNextFocus: '2021-08-17'
  },
  {
    focusedDay: '2022-08-17',
    moveBy: 'year',
    moveDirection: 'after',
    options: {},
    expectedNextFocus: '2023-08-17'
  }
];

describe.each(tests)(
  'when focusing the $moveBy $moveDirection $focusedDay',
  ({ focusedDay, moveBy, moveDirection, options, expectedNextFocus }) => {
    test(`should return ${expectedNextFocus}`, () => {
      const nextFocus = getNextFocus(
        parseISO(focusedDay),
        moveBy,
        moveDirection,
        options
      );
      expect(format(nextFocus, 'yyyy-MM-dd')).toBe(expectedNextFocus);
    });
  }
);

describe('when reaching the "fromDate"', () => {
  const focusedDate = new Date();
  const fromDate = addDays(focusedDate, -1);
  test('next focus should be "fromDate"', () => {
    const nextFocus = getNextFocus(focusedDate, 'day', 'before', {
      fromDate
    });
    expect(nextFocus).toStrictEqual(fromDate);
  });
});

describe('when reaching the "toDate"', () => {
  const focusedDate = new Date();
  const toDate = addDays(focusedDate, 1);
  test('next focus should be "toDate"', () => {
    const nextFocus = getNextFocus(focusedDate, 'day', 'after', {
      toDate
    });
    expect(nextFocus).toStrictEqual(toDate);
  });
});
