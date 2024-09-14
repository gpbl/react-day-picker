import React from "react";

import { useDayPicker } from "../useDayPicker.js";

import { DropdownProps } from "./Dropdown.js";

/**
 * Render the dropdown to navigate between years.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function YearsDropdown(props: DropdownProps) {
  const { components } = useDayPicker();
  return <components.Dropdown {...props} />;
}
