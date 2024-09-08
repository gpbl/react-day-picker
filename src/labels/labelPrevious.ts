/**
 * The ARIA label for previous month button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelPrevious(
  /** Undefined where there's no previous month to navigate to. */
  month: Date | undefined
) {
  return "Go to the Previous Month";
}
