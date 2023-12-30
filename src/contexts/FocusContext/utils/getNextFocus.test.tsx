import { CalendarDay } from '../../../classes/CalendarDay';
import type { Mode } from '../../../types';
import type { DayPickerContext } from '../../DayPickerContext';
import type { MoveFocusBy, MoveFocusDir } from '../FocusContext';
import { getNextFocus } from './getNextFocus';

const defaultDayPicker: Pick<
  DayPickerContext<Mode>,
  'disabled' | 'hidden' | 'fromDate' | 'toDate'
> = {
  disabled: [],
  hidden: [],
  fromDate: undefined,
  toDate: undefined
};

it('should return `undefined` if `attempt` exceeds 365', () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const moveBy: MoveFocusBy = 'day';
  const moveDir: MoveFocusDir = 'after';
  const result = getNextFocus(
    moveBy,
    moveDir,
    focusedDay,
    defaultDayPicker,
    366
  );
  expect(result).toBeUndefined();
});

it('should return the focus date if it is not disabled or hidden', () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const expectedDate = new Date(2020, 0, 2);
  const result = getNextFocus('day', 'after', focusedDay, defaultDayPicker);
  expect(result?.date).toEqual(expectedDate);
});

it('should return the next focus date if it is disabled', () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const disabledDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus('day', 'after', focusedDay, {
    ...defaultDayPicker,
    disabled: [disabledDate]
  });
  expect(result?.date).toEqual(expectedDate);
});

it('should return the next focus date if it is hidden', () => {
  const focusedDay = new CalendarDay(
    new Date(2020, 0, 1),
    new Date(2020, 0, 1)
  );
  const hiddenDate = new Date(2020, 0, 2);
  const expectedDate = new Date(2020, 0, 3);
  const result = getNextFocus('day', 'after', focusedDay, {
    ...defaultDayPicker,
    hidden: [hiddenDate]
  });
  expect(result?.date).toEqual(expectedDate);
});
