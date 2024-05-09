import { DayPickerProps } from "../DayPicker";
import { DayPickerContextValue } from "../contexts/DayPicker";

import { PropsBase } from "./PropsBase";
import { SelectMultipleEventHandler } from "./events";

/** The props for the {@link DayPicker} component when using `mode="multiple"`. */
export interface PropsMulti extends PropsBase {
  mode: "multiple";
  /** The selected days. */
  selected?: Date[] | undefined;
  /** Event fired when a days added or removed to the selection. */
  onSelect?: SelectMultipleEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}

/** Returns true when the props are of type {@link PropsMulti}. */
export function isDayPickerMultiple(
  props: DayPickerProps | DayPickerContextValue
): props is PropsMulti {
  return props.mode === "multiple";
}
