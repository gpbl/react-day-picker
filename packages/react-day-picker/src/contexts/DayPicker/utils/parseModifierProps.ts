import { DayPickerProps, InternalModifier, Modifiers } from '../../../types';

/** Props that will merge into the modifiers. */
const modifierShortcuts: InternalModifier[] = [
  'selected',
  'hidden',
  'disabled'
];

/**
 * Parse the modifiers from the props.
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
    today: [],
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TOFIX: initial props do not have some modifiers
    const modifierFromProp = initialProps[modifier];
    if (Array.isArray(modifierFromProp)) {
      modifiers[modifier] = modifierFromProp;
    } else if (modifierFromProp !== undefined) {
      modifiers[modifier] = [modifierFromProp];
    } else {
      modifiers[modifier] = [];
    }
  });

  return modifiers;
}
