import * as components from "../components/custom-components.js";
import type { CustomComponents, DayPickerProps } from "../types/index.js";

export function getComponents(
  customComponents: DayPickerProps["components"]
): Required<CustomComponents> {
  return {
    ...components,
    ...customComponents
  };
}
