import { isAfter as isAfterNative } from "date-fns";

export function isAfter(date: Date, other: Date): boolean {
  return isAfterNative(date, other);
}
