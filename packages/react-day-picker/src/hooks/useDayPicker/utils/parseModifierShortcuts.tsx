import { DayPickerProps, Modifiers } from 'types';

/**
 * Parse the modifiers from the "modifiers shortcuts" such as `hidden` or
 * `selected` from the initial props.
 */
export function parseModifierShortcuts(
  initialProps: DayPickerProps
): Modifiers {
  const modifiers: Modifiers = initialProps.modifiers || {};
  if (modifiers && initialProps.selected) {
    modifiers.selected = initialProps.selected;
  }
  if (modifiers && initialProps.hidden) {
    modifiers.hidden = initialProps.hidden;
  }
  if (modifiers && initialProps.disabled) {
    modifiers.disabled = initialProps.disabled;
  }
  return modifiers;
}
