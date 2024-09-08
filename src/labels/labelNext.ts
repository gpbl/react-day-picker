/**
 * The ARIA label for next month button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
export function labelNext(
  /** `undefined` where there's no next month to navigate to. */
  month: Date | undefined
) {
  return "Go to the Next Month";
}
