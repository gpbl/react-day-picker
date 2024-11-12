import type { DayPickerProps } from "../types/index.js";

/** Return the `data-` attributes from the props. */
export function getDataAttributes(
  props: DayPickerProps
): Record<string, unknown> {
  const dataAttributes: Record<string, unknown> = {
    "data-mode": props.mode ?? undefined,
    "data-required": "required" in props ? props.required : undefined,
    "data-multiple-months":
      (props.numberOfMonths && props.numberOfMonths > 1) || undefined,
    "data-week-numbers": props.showWeekNumber || undefined,
    "data-animate": props.animate ?? undefined
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
