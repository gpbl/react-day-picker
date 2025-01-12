import { toEth, toGreg } from "../utils/ethiopicDateUtils.js";

export function startOfMonth(date: Date): Date {
  const etDate = toEth(date);
  return toGreg({
    ...etDate,
    Day: 1
  });
}
