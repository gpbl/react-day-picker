import React from "react";

import {
  DayPicker as DayPickerComponent,
  type DayPickerProps,
} from "./index.js";

/**
 * @deprecated Use the `timeZone` prop instead of this function. This function
 *   wraps the DayPicker component and sets the `timeZone` to "utc".
 * @param props - The props to pass to the DayPicker component.
 * @returns The DayPicker component with the `timeZone` set to "utc".
 */
export function DayPicker(props: DayPickerProps) {
  return <DayPickerComponent timeZone="utc" {...props} />;
}
