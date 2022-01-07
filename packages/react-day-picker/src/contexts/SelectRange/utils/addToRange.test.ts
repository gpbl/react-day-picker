import { addDays, subDays } from 'date-fns';

import { addToRange } from './addToRange';

describe('addToRange', () => {
  const fromDate = new Date(2022, 0, 7);
  const earlierDate = subDays(fromDate, 2);
  const toDate = addDays(fromDate, 2);
  const laterDate = addDays(toDate, 2);

  it('should return a range with just a from date on first selecting a day', () => {
    expect(
      addToRange(fromDate, {
        from: undefined,
        to: undefined
      })
    ).toEqual({
      from: fromDate,
      to: undefined
    });
  });

  it('should return a range to and from one day when selecting the same day twice', () => {
    expect(
      addToRange(fromDate, {
        from: fromDate,
        to: undefined
      })
    ).toEqual({
      from: fromDate,
      to: fromDate
    });
  });

  it('should return a range when selecting an earlier day than the from day', () => {
    expect(
      addToRange(earlierDate, {
        from: fromDate,
        to: undefined
      })
    ).toEqual({
      from: earlierDate,
      to: fromDate
    });
  });

  it('should return a range when selecting an later day than the from day', () => {
    expect(
      addToRange(toDate, {
        from: fromDate,
        to: undefined
      })
    ).toEqual({
      from: fromDate,
      to: toDate
    });
  });

  it('should return undefined when selecting the same day when range is set', () => {
    expect(
      addToRange(fromDate, {
        from: fromDate,
        to: fromDate
      })
    ).toEqual(undefined);
  });

  it('should return a range with a new "from" date when selecting the "to" day when range is set', () => {
    expect(
      addToRange(toDate, {
        from: fromDate,
        to: toDate
      })
    ).toEqual({
      from: toDate,
      to: undefined
    });
  });

  it('should return undefined when selecting the "from" day when range is set', () => {
    expect(
      addToRange(fromDate, {
        from: fromDate,
        to: toDate
      })
    ).toEqual(undefined);
  });

  it('should return updated range when selecting an earlier date when range is set', () => {
    expect(
      addToRange(earlierDate, {
        from: fromDate,
        to: toDate
      })
    ).toEqual({
      from: earlierDate,
      to: toDate
    });
  });

  it('should return updated range when selecting a later date when range is set', () => {
    expect(
      addToRange(laterDate, {
        from: fromDate,
        to: toDate
      })
    ).toEqual({
      from: fromDate,
      to: laterDate
    });
  });
});
