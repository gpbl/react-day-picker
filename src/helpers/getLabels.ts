import * as defaultLabels from "../labels/index.js";
import type { DayPickerProps, Labels } from "../types/index.js";

/** Return the formatters from the props merged with the default formatters. */
export function getLabels(customLabels: DayPickerProps["labels"]): Labels {
  return {
    ...defaultLabels,
    ...customLabels
  };
}
