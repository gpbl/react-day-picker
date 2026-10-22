/**
 * Default instructions announced when focus enters a calendar in cell mode.
 * Override through `labels.labelKeyboardHelp` or the locale's labels.
 * Return an empty string to disable the announcement.
 *
 * @group Labels
 */
export function labelKeyboardHelp(): string {
  return "Use arrow keys to navigate dates. Press Enter or Space to select.";
}
