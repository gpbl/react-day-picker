import { isToday } from 'date-fns';

import { MatchingModifiers, DayPickerProps } from '../components/DayPicker';
import { defaultModifiers } from '../components/DayPicker/defaults/defaultModifiers';

import { getMatchingModifiers } from './modifiers-utils/getMatchingModifiers';
import { getModifiersFromProps } from './modifiers-utils/getModifiersFromProps';
import { getOutsideModifier } from './modifiers-utils/getOutsideModifier';

/**
 * Get the modifiers for the specified day.
 *
 * @category Hooks
 */
export function useModifiers(
  day: Date,
  currentMonth: Date,
  props: DayPickerProps
): MatchingModifiers {
  const modifiers: MatchingModifiers = {
    ...defaultModifiers
  };
  modifiers.today = isToday(day);

  const outsideModifier = getOutsideModifier(day, currentMonth);
  if (outsideModifier) {
    modifiers[outsideModifier] = true;
  }

  const isOutside = modifiers.beforemonth || modifiers.aftermonth;

  modifiers.hidden = isOutside && !props.showOutsideDays;
  modifiers.disabled = isOutside && !props.enableOutsideDaysClick;

  const modifiersFromProps = getModifiersFromProps(props);
  const modifiersArray = getMatchingModifiers(day, modifiersFromProps);
  modifiersArray.forEach((modifier) => (modifiers[modifier] = true));

  if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
    modifiers.interactive = false;
  }
  return modifiers;
}
