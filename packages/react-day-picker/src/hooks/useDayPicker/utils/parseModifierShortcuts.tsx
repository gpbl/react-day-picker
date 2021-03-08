import { DayPickerProps, Modifiers } from '../../../types';

/**
 * Parse the modifiers from the "modifiers shortcuts" such as `hidden` or
 * `selected` from the initial props.
 */
export function parseModifierShortcuts(
  initialProps: DayPickerProps
): Modifiers {
  const modifiers: Modifiers = initialProps.modifiers || {};
  modifiers.selected = initialProps.selected ?? [];
  modifiers.hidden = initialProps.hidden ?? [];
  modifiers.disabled = initialProps.disabled ?? [];
  return modifiers;
}
