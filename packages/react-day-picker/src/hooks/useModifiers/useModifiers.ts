import { isSameDay } from 'date-fns';

import { ModifiersStatus, DayPickerProps } from '../../components/DayPicker';
import { DEFAULT_MODIFIERS_VALUES } from '../../components/DayPicker/defaults/modifiersValues';

import { findModifiers } from '../../utils/findModifiers';
import { getModifiersFromProps } from '../../utils/getModifiersFromProps';
import { getOutsideModifier } from '../../utils/getOutsideModifier';

/**
 * Handle the modifiers for the given day,
 *
 * @category Hook
 */
export function useModifiers(
  day: Date,
  currentMonth: Date,
  props: DayPickerProps
): ModifiersStatus {
  const modifiers: ModifiersStatus = {
    ...DEFAULT_MODIFIERS_VALUES
  };

  if (props.today !== 'off') {
    modifiers.today = isSameDay(props.today || new Date(), day);
  }

  const outsideModifier = getOutsideModifier(day, currentMonth);
  if (outsideModifier) {
    modifiers[outsideModifier] = true;
  }

  const isOutside = modifiers.beforemonth || modifiers.aftermonth;

  modifiers.hidden = isOutside && !props.showOutsideDays;
  modifiers.disabled = isOutside && !props.enableOutsideDaysClick;

  const modifiersFromProps = getModifiersFromProps(props);

  const foundModifiers = findModifiers(day, modifiersFromProps);
  foundModifiers.forEach((modifier) => (modifiers[modifier] = true));

  if (!props.onDayClick || modifiers.hidden || modifiers.disabled) {
    modifiers.interactive = false;
  }
  return modifiers;
}
