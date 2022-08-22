/* eslint-disable jest/no-standalone-expect */
import { addDays, format, parseISO } from 'date-fns';

import {
  InternalModifier,
  InternalModifiers,
  Modifiers
} from 'types/Modifiers';

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
  const focusedDay = new Date();
  const fromDate = addDays(focusedDay, -1);
  test('next focus should be "fromDate"', () => {
    const nextFocus = getNextFocus(focusedDay, 'day', 'before', {
      fromDate
    });
    expect(nextFocus).toStrictEqual(fromDate);
  });
});

describe('when reaching the "toDate"', () => {
  const focusedDay = new Date();
  const toDate = addDays(focusedDay, 1);
  test('next focus should be "toDate"', () => {
    const nextFocus = getNextFocus(focusedDay, 'day', 'after', {
      toDate
    });
    expect(nextFocus).toStrictEqual(toDate);
  });
});

const emptyModifiers: Modifiers = {
  outside: [],
  disabled: [],
  selected: [],
  hidden: [],
  today: [],
  range_start: [],
  range_end: [],
  range_middle: []
};

type ModifiersTest = {
  focusedDay: string;
  skippedDay: string;
  moveBy: MoveFocusBy;
  moveDirection: MoveFocusDirection;
  modifierName: InternalModifier;
  expectedNextFocus: string;
  fromDate?: string;
  toDate?: string;
};

const modifiersTest: ModifiersTest[] = [
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-18',
    moveBy: 'day',
    moveDirection: 'after',
    modifierName: InternalModifier.Hidden,
    expectedNextFocus: '2022-08-19'
  },
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-18',
    moveBy: 'day',
    moveDirection: 'after',
    modifierName: InternalModifier.Disabled,
    expectedNextFocus: '2022-08-19'
  },
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-16',
    moveBy: 'day',
    moveDirection: 'before',
    modifierName: InternalModifier.Hidden,
    expectedNextFocus: '2022-08-15'
  },
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-16',
    moveBy: 'day',
    moveDirection: 'before',
    modifierName: InternalModifier.Disabled,
    expectedNextFocus: '2022-08-15'
  },
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-16',
    fromDate: '2022-08-01',
    moveBy: 'month',
    moveDirection: 'before',
    modifierName: InternalModifier.Disabled,
    expectedNextFocus: '2022-08-01'
  },
  {
    focusedDay: '2022-08-17',
    skippedDay: '2022-08-16',
    toDate: '2022-08-31',
    moveBy: 'month',
    moveDirection: 'after',
    modifierName: InternalModifier.Disabled,
    expectedNextFocus: '2022-08-31'
  }
];
describe.each(modifiersTest)(
  'when focusing the $moveBy $moveDirection $focusedDay with $modifierName modifier',
  (modifierTest) => {
    const modifiers: InternalModifiers = {
      ...emptyModifiers,
      [modifierTest.modifierName]: [parseISO(modifierTest.skippedDay)]
    };
    const options = {
      fromDate: modifierTest.fromDate
        ? parseISO(modifierTest.fromDate)
        : undefined,
      toDate: modifierTest.toDate ? parseISO(modifierTest.toDate) : undefined
    };
    test(`should skip the ${modifierTest.modifierName} day`, () => {
      const nextFocus = getNextFocus(
        parseISO(modifierTest.focusedDay),
        modifierTest.moveBy,
        modifierTest.moveDirection,
        options,
        modifiers
      );
      expect(format(nextFocus, 'yyyy-MM-dd')).toBe(
        modifierTest.expectedNextFocus
      );
    });
  }
);
