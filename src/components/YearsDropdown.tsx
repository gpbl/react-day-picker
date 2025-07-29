import React from "react";

import { useDayPicker } from "../useDayPicker.js";

import type { DropdownProps } from "./Dropdown.js";

/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function YearsDropdown(props: DropdownProps) {
  const { components } = useDayPicker();
  return <components.Dropdown {...props} />;
}
