import type { format } from "date-fns/format";

/** Return the default ARIA label for next month button. */
export function labelNext(
  /** Undefined where there's no next month no navigate to. */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  month: Date | undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: Parameters<typeof format>[2],
) {
  return "Next Month";
}
