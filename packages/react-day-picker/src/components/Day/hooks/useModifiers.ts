import { isToday } from 'date-fns';

import { MatchingModifiers, DayPickerProps } from '../../DayPicker';
import { defaultModifiers } from '../../DayPicker/defaults/defaultModifiers';

import { getMatchingModifiers } from './utils/getMatchingModifiers';
import { getModifiersFromProps } from './utils/getModifiersFromProps';
import { getOutsideModifier } from './utils/getOutsideModifier';

/**
 * TODO: add docs
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
