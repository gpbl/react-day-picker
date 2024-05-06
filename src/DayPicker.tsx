import { Root } from "./components/Root";
import { RootProvider } from "./contexts/RootProvider";
import { DayPickerDefaultProps } from "./types/DayPickerDefault";
import { DayPickerMultipleProps } from "./types/DayPickerMultiple";
import { DayPickerRangeProps } from "./types/DayPickerRange";
import { DayPickerSingleProps } from "./types/DayPickerSingle";

export type DayPickerProps =
  | DayPickerDefaultProps
  | DayPickerSingleProps
  | DayPickerMultipleProps
  | DayPickerRangeProps;

/**
 * DayPicker is a React component to create date pickers, calendars, and date
 * inputs for web applications.
 *
 * @see http://daypicker.dev
 */
export function DayPicker(
  props:
    | DayPickerDefaultProps
    | DayPickerSingleProps
    | DayPickerMultipleProps
    | DayPickerRangeProps
): JSX.Element {
  return (
    <RootProvider {...props}>
      <Root initialProps={props} />
    </RootProvider>
  );
}
