import { addYears } from 'date-fns/addYears';
import { endOfMonth } from 'date-fns/endOfMonth';
import { endOfYear } from 'date-fns/endOfYear';
import { startOfDay } from 'date-fns/startOfDay';
import { startOfMonth } from 'date-fns/startOfMonth';
import { startOfYear } from 'date-fns/startOfYear';

import type { DayPickerProps } from '../../../DayPicker';
import type { Mode } from '../../../types';

/** Return the `fromDate` and `toDate` prop values values parsing the DayPicker props. */
export function getFromToDate(
  props: Pick<
    DayPickerProps<Mode>,
    | 'id'
    | 'fromYear'
    | 'toYear'
    | 'fromDate'
    | 'toDate'
    | 'fromMonth'
    | 'toMonth'
    | 'today'
    | 'dropdownNavigation'
  >
): Pick<DayPickerProps<Mode>, 'fromDate' | 'toDate'> {
  const { fromYear, toYear, fromMonth, toMonth } = props;
  let { fromDate, toDate } = props;

  if (fromMonth) {
    fromDate = startOfMonth(fromMonth);
  } else if (fromYear) {
    fromDate = new Date(fromYear, 0, 1);
  } else if (!fromDate && props.dropdownNavigation !== undefined) {
    fromDate = startOfYear(addYears(props.today ?? new Date(), -100));
  }
  if (toMonth) {
    toDate = endOfMonth(toMonth);
  } else if (toYear) {
    toDate = new Date(toYear, 11, 31);
  } else if (!toDate && props.dropdownNavigation) {
    toDate = endOfYear(props.today ?? new Date());
  }
  return {
    fromDate: fromDate ? startOfDay(fromDate) : undefined,
    toDate: toDate ? startOfDay(toDate) : undefined
  };
}
