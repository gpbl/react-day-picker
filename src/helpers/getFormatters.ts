import * as defaultFormatters from "../formatters/index.js";
import type { DayPickerProps } from "../types/index.js";

/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */
export function getFormatters(customFormatters: DayPickerProps["formatters"]) {
  return {
    ...defaultFormatters,
    ...customFormatters,
  };
}
