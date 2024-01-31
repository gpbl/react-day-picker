import { labelDay } from '../labels/labelDay';
import { labelMonthDropdown } from '../labels/labelMonthDropdown';
import { labelNext } from '../labels/labelNext';
import { labelPrevious } from '../labels/labelPrevious';
import { labelWeekday } from '../labels/labelWeekday';
import { labelWeekNumber } from '../labels/labelWeekNumber';
import { labelWeekNumberHeader } from '../labels/labelWeekNumberHeader';
import { labelYearDropdown } from '../labels/labelYearDropdown';

/**
 * Map of functions returning ARIA labels for the relative elements.
 *
 * @category Labels
 */
export type Labels = {
  /** Return the label for the month dropdown. */
  labelMonthDropdown: typeof labelMonthDropdown;
  /** Return the label for the year dropdown. */
  labelYearDropdown: typeof labelYearDropdown;
  /** Return the label for the next month button. */
  labelNext: typeof labelNext;
  /** Return the label for the previous month button. */
  labelPrevious: typeof labelPrevious;
  /** Return the label for the day cell. */
  labelDay: typeof labelDay;
  /** Return the label for the weekday. */
  labelWeekday: typeof labelWeekday;
  /** Return the label for the week number. */
  labelWeekNumber: typeof labelWeekNumber;
  /** Return the label for the column of the week number. */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};
