import type { DayPickerProps } from "../types";

/** Return the `data-` attributes from the props. */
export function getDataAttributes(
  props: Partial<DayPickerProps>
): Record<string, unknown> {
  const dataAttributes: Record<string, unknown> = {};
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
