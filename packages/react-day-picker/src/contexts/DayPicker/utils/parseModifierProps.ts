import { DayPickerProps, InternalModifier, Modifiers } from '../../../types';

/** Props that will merge into the modifiers. */
const modifierShortcuts: InternalModifier[] = [
  'selected',
  'hidden',
  'disabled'
];

/**
 * Parse the modifiers from the props and return them as a map of array of
 * matcher.
 *
 * Internally we want modifiers as an array of matchers – as opposite of the
 * props which can accept also a matcher.
 */
export function parseModifierProps(initialProps: DayPickerProps): Modifiers {
  const initialModifiers = initialProps.modifiers || {};

  const modifiers: Modifiers = {
    selected: [],
    disabled: [],
    hidden: [],
    range_end: [],
    range_middle: [],
    range_start: []
  };

  Object.entries(initialModifiers).forEach(([modifier, matcher]) => {
    if (Array.isArray(matcher)) {
      modifiers[modifier] = matcher;
    } else if (matcher) {
      modifiers[modifier] = [matcher];
    } else {
      modifiers[modifier] = [];
    }
  });

  modifierShortcuts.forEach((modifier) => {
    if (Array.isArray(initialProps[modifier])) {
      modifiers[modifier] = initialProps[modifier];
    } else if (initialProps[modifier]) {
      modifiers[modifier] = [initialProps[modifier]];
    } else {
      modifiers[modifier] = [];
    }
  });

  return modifiers;
}
