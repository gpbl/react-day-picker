import { DayPickerProps } from "../DayPicker";
import { DayPickerContextValue } from "../contexts/DayPicker";

import { SelectRangeEventHandler } from "./EventHandlers";
import { DateRange } from "./Matchers";
import { PropsBase } from "./PropsBase";

/** The props for the {@link DayPicker} component when using `mode="range"`. */
export interface PropsRange extends PropsBase {
  mode: "range";
  /** The selected range of days. */
  selected?: DateRange | undefined;
  /** Event fired when a range (or a part of the range) is selected. */
  onSelect?: SelectRangeEventHandler;
  /** The minimum amount of days that can be selected. */
  min?: number;
  /** The maximum amount of days that can be selected. */
  max?: number;
}

/** Returns true when the props are of type {@link PropsRange}. */
export function isDayPickerRange(
  props: DayPickerProps | DayPickerContextValue
): props is PropsRange {
  return props.mode === "range";
}
