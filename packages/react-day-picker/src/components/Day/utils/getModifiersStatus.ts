import {
  DayPickerContextValue,
  ModifiersMatchers,
  ModifiersStatus
} from '../../../types';
import { getModifiersFromContext } from './getModifiersFromContext';
import { isMatch } from './isMatch';

const reduceCallback = (
  day: Date,
  matchers: ModifiersMatchers,
  displayMonth: Date,
  context: DayPickerContextValue
) => (previousValue: string[], key: string): string[] => {
  const matcher = matchers[key];
  if (isMatch(day, matcher, displayMonth, context)) {
    previousValue.push(key);
  }
  return previousValue;
};

/**
 * Return the status of the modifiers for the given day,
 */
export function getModifiersStatus(
  day: Date,
  displayMonth: Date,
  context: DayPickerContextValue
): ModifiersStatus {
  const modifierMatchers = getModifiersFromContext(context);
  const modifiersList: string[] = Object.keys(modifierMatchers).reduce(
    reduceCallback(day, modifierMatchers, displayMonth, context),
    []
  );
  const modifiers = {};
  modifiersList.forEach((modifier) => (modifiers[modifier] = true));
  return modifiers;
}
