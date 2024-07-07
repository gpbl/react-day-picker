import { dateLib } from "../lib/dateLib.js";
import type { DateLib, DayPickerProps } from "../types/index.js";

export function getDateLib(customLib: DayPickerProps["dateLib"]): DateLib {
  return {
    ...dateLib,
    ...customLib
  };
}
