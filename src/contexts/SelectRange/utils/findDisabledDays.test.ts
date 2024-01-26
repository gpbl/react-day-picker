import { addDays } from 'date-fns';

import { freezeBeforeAll } from 'test/utils';

import { findDisabledDays } from './findDisabledDays';

const today = new Date(2021, 11);
freezeBeforeAll(today);

type Result = { after: Date | undefined; before: Date | undefined } | undefined;

const disabledDays = [
  addDays(today, 2),
  [addDays(today, 6), addDays(today, 20)],
  { from: addDays(today, 15), to: addDays(today, 17) }
];

describe('when a day is selected between two disabled days - test 1', () => {
  let result: Result;
  beforeAll(() => {
    result = findDisabledDays(addDays(today, 4), disabledDays);
  });
  test('should return after and before', () => {
    expect(result).toEqual({
      after: addDays(today, 6),
      before: addDays(today, 2)
    });
  });
});

describe('when a day is selected between two disabled days - test 2', () => {
  let result: Result;
  beforeAll(() => {
    result = findDisabledDays(addDays(today, 19), disabledDays);
  });
  test('should return after and before', () => {
    expect(result).toEqual({
      after: addDays(today, 20),
      before: addDays(today, 18)
    });
  });
});

describe('when a day is selected between two disabled days - test 3', () => {
  let result: Result;
  beforeAll(() => {
    result = findDisabledDays(addDays(today, 10), disabledDays);
  });
  test('should return after and before', () => {
    expect(result).toEqual({
      after: addDays(today, 14),
      before: addDays(today, 6)
    });
  });
});

describe('when a day is selected before a disabled day', () => {
  let result: Result;
  beforeAll(() => {
    result = findDisabledDays(today, disabledDays);
  });
  test('should return after and before', () => {
    expect(result).toEqual({
      after: addDays(today, 2),
      before: undefined
    });
  });
});

describe('when a day is selected after a disabled day', () => {
  let result: Result;
  beforeAll(() => {
    result = findDisabledDays(addDays(today, 22), disabledDays);
  });
  test('should return after and before', () => {
    expect(result).toEqual({
      after: undefined,
      before: addDays(today, 20)
    });
  });
});
