import { isToday } from 'date-fns';

import { MatchingModifiers, DayPickerProps } from '../../DayPicker';
import { defaultModifiers } from '../../DayPicker/defaults/defaultModifiers';

import { getMatchingModifiers } from './utils/getMatchingModifiers';
import { getModifiersFromProps } from './utils/getModifiersFromProps';

/**
 * TODO: add docs
 */
export function useModifiers(
  day: Date,
  props: DayPickerProps
): MatchingModifiers {
  const modifiers: MatchingModifiers = {
    ...defaultModifiers
  };
  modifiers.today = isToday(day);

  // TODO: outside modifiers

  if (modifiers.outside && !props.showOutsideDays) {
    modifiers.hidden = true;
  }
  modifiers.disabled = Boolean(
    modifiers.outside && !props.enableOutsideDaysClick
  );
  if (modifiers.outside && !props.showOutsideDays) {
    modifiers.hidden = true;
  }
  modifiers.disabled = Boolean(
    modifiers.outside && !props.enableOutsideDaysClick
  );

  const modifiersFromProps = getModifiersFromProps(props);
  const modifiersArray = getMatchingModifiers(day, modifiersFromProps);
  modifiersArray.forEach((modifier) => (modifiers[modifier] = true));

  if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
    modifiers.interactive = false;
  }
  return modifiers;
}
