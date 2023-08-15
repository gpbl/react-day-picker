import { createDateRangeWithoutDisabledDaysBasedFromStartDate } from './createDateRangeWithoutDisabledDaysBasedFromStartDate';
import { addDays } from 'date-fns';
import { isDateAfterType, isDateBeforeType } from 'types/Matchers';

describe('when today is before disabled dates', () => {
  const disabledNonConsecutiveDates =
    createDateRangeWithoutDisabledDaysBasedFromStartDate(
      [
        { from: addDays(new Date(), 3), to: addDays(new Date(), 8) },
        { from: addDays(new Date(), 12), to: addDays(new Date(), 17) }
      ],
      new Date()
    );

  test('should only create one disabled matcher', () => {
    expect(disabledNonConsecutiveDates).toHaveLength(1);
  });

  test('should create "after" matcher from the earliest "to"', () => {
    expect(
      disabledNonConsecutiveDates
        .filter(isDateAfterType)
        .some(
          (date) => addDays(new Date(), 8).getDate() === date.after.getDate()
        )
    ).toBeTruthy();
  });
});

describe('when today after disabled dates', () => {
  const disabledNonConsecutiveDates =
    createDateRangeWithoutDisabledDaysBasedFromStartDate(
      [
        { from: addDays(new Date(), -8), to: addDays(new Date(), -3) },
        { from: addDays(new Date(), -17), to: addDays(new Date(), -12) }
      ],
      new Date()
    );

  test('should only create one disabled matcher', () => {
    expect(disabledNonConsecutiveDates).toHaveLength(1);
  });

  test('should create "before" matcher from the latest "from"', () => {
    expect(
      disabledNonConsecutiveDates
        .filter(isDateBeforeType)
        .some(
          (date) => addDays(new Date(), -8).getDate() === date.before.getDate()
        )
    ).toBeTruthy();
  });
});
