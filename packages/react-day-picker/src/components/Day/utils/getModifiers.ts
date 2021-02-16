import { DayPickerContextValue } from '../../../components';
import { Modifier, ModifiersMatchers, ModifiersStatus } from '../../../types';
import { getModifiersFromProps } from './getModifiersFromProps';
import { matchDay } from './matchModifier';

const reduceCallback = (
  day: Date,
  matchers: ModifiersMatchers,
  currentMonth: Date,
  context: DayPickerContextValue
) => (previousValue: string[], key: string): string[] => {
  const matcher = matchers[key];
  if (matchDay(day, matcher, currentMonth, context)) {
    previousValue.push(key);
  }
  return previousValue;
};

/**
 * Return the status of the modifiers for the given day,
 */
export function getModifiers(
  day: Date,
  currentMonth: Date,
  context: DayPickerContextValue
): ModifiersStatus {
  const modifierMatchers = getModifiersFromProps(context);
  const modifiersList: Modifier[] = Object.keys(modifierMatchers).reduce(
    reduceCallback(day, modifierMatchers, currentMonth, context),
    []
  );
  const modifiers = {};
  modifiersList.forEach((modifier) => (modifiers[modifier] = true));
  return modifiers;
}
