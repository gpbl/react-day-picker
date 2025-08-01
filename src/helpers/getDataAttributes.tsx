import type { DayPickerProps } from "../types/index.js";

/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */
export function getDataAttributes(
  props: DayPickerProps,
): Record<string, unknown> {
  const dataAttributes: Record<string, unknown> = {
    "data-mode": props.mode ?? undefined,
    "data-required": "required" in props ? props.required : undefined,
    "data-multiple-months":
      (props.numberOfMonths && props.numberOfMonths > 1) || undefined,
    "data-week-numbers": props.showWeekNumber || undefined,
    "data-broadcast-calendar": props.broadcastCalendar || undefined,
    "data-nav-layout": props.navLayout || undefined,
  };
  Object.entries(props).forEach(([key, val]) => {
    if (key.startsWith("data-")) {
      dataAttributes[key] = val;
    }
  });
  return dataAttributes;
}
