/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormatOptions } from '../types/FormatOptions';

/** Return the default ARIA label for the week number element. */
export function labelWeekNumber(n: number, options?: FormatOptions): string {
  return `Week ${n}`;
}
