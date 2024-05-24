import { DayPickerProps } from "../DayPicker";
import { DayPickerContextValue } from "../contexts/DayPicker";

import { PropsBase } from "./PropsBase";
import { SelectSingleEventHandler } from "./events";

/** The props for the {@link DayPicker} component when using `mode="single"`. */
export interface PropsSingle extends PropsBase {
  mode: "single";
  /** The selected day. */
  selected?: Date | undefined;
  /** Event fired when a day is selected. */
  onSelect?: SelectSingleEventHandler;
  /** Make the selection required. */
  required?: boolean;
}

/** Returns true when the props are of type {@link PropsSingle}. */
export function isDayPickerSingle(
  props: DayPickerProps | DayPickerContextValue
): props is PropsSingle {
  return props.mode === "single";
}
