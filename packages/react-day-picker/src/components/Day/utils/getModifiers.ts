import { PropsValues } from '../../../components';
import { ModifiersMatchers, ModifiersStatus } from '../../../types';
import { getModifiersFromProps } from './getModifiersFromProps';
import { matchDay } from './matchModifier';

const reduceCallback = (
  day: Date,
  matchers: ModifiersMatchers,
  currentMonth: Date,
  props: PropsValues
) => (previousValue: string[], key: string): string[] => {
  const matcher = matchers[key];
  if (matchDay(day, matcher, currentMonth, props)) {
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
  props: PropsValues
): ModifiersStatus {
  const modifierMatchers = getModifiersFromProps(props);
  const modifiersList: string[] = Object.keys(modifierMatchers).reduce(
    reduceCallback(day, modifierMatchers, currentMonth, props),
    []
  );
  const modifiers = {};
  modifiersList.forEach((modifier) => (modifiers[modifier] = true));
  return modifiers;
}
