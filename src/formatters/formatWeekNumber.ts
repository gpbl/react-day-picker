/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormatOptions } from '../types/FormatOptions';

/** The default formatter for the week numbers. */
export function formatWeekNumber(weekNumber: number, options?: FormatOptions) {
  return `${weekNumber}`;
}
