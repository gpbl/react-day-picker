import type { format } from 'date-fns';

/** Return the default ARIA label for next month button. */
export function labelPrevious(
  /** Undefined where there's no previous month no navigate to. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  month: Date | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Parameters<typeof format>[2]
) {
  return 'Go to the Previous Month';
}
