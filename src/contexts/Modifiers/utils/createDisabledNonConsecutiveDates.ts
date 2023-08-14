import { DateAfter, DateBefore, isDateRange, Matcher } from 'types/Matchers';
import { isAfter, isBefore } from 'date-fns';

/** Return a list of {@link DateBefore} and {@link DateAfter} from the disabled modifiers. */
export function createDisabledNonConsecutiveDates(
  disabled: Matcher[],
  from: Date
): (DateBefore | DateAfter)[] {
  const disabledNonConsecutiveDates: (DateBefore | DateAfter)[] = [];

  let earliest: Date | undefined;
  let latest: Date | undefined;

  disabled.filter(isDateRange).forEach((range) => {
    // We only need to add the latest 'from' date in the range.
    // As when we disable it with DateBefore object, others will be included.
    if (range.from && range.from < from) {
      (!latest || isAfter(range.from, latest)) && (latest = range.from);
    }
    // We only need to add the earliest 'to' date in the range.
    // As when we disable it with DateAfter object, others will be included.
    if (range.to && range.to > from) {
      (!earliest || isBefore(range.to, earliest)) && (earliest = range.to);
    }
  });

  latest && disabledNonConsecutiveDates.push({ before: latest });
  earliest && disabledNonConsecutiveDates.push({ after: earliest });

  return disabledNonConsecutiveDates;
}
