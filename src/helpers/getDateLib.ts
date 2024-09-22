import { dateLib, type DateLib } from "../lib/dateLib.js";
import type { DayPickerProps } from "../types/index.js";

export function getDateLib(customLib: DayPickerProps["dateLib"]): DateLib {
  return {
    ...dateLib,
    ...customLib
  };
}
