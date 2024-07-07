import { ByRoleOptions, screen } from "@testing-library/react";
import {
  DayFlag,
  SelectionState,
  labelDayButton,
  labelGridcell
} from "react-day-picker";

/** Return the application element from the screen. */
export function app() {
  return screen.getByRole("application");
}

/** Return the previous button element from the screen. */
export function previousButton() {
  return screen.getByRole("button", {
    name: "Previous Month"
  });
}

/** Return the next button element from the screen. */
export function nextButton() {
  return screen.getByRole("button", {
    name: "Next Month"
  });
}

/**
 * Return the columnheader element from the screen.
 *
 * @param {string} name - The name of the columnheader.
 */
export function columnheader(name?: ByRoleOptions["name"]) {
  return screen.getByRole("columnheader", name ? { name } : undefined);
}

/**
 * Return the grid element from the screen.
 *
 * @param {string} name - The name of the grid.
 */
export function grid(name?: ByRoleOptions["name"]) {
  return screen.getByRole("grid", name ? { name } : undefined);
}

/** Return the parent element of the next button from the screen. */
export function nav() {
  return nextButton().parentElement;
}

/**
 * Return the button element with the date
 *
 * @param {Date} date - The date to match the button name.
 */
export function dateButton(date: Date) {
  return screen.getByRole("button", {
    name: new RegExp(
      labelDayButton(date, {
        [DayFlag.disabled]: false,
        [DayFlag.hidden]: false,
        [DayFlag.outside]: false,
        [DayFlag.focused]: false,
        [DayFlag.today]: false,
        [SelectionState.range_end]: false,
        [SelectionState.range_middle]: false,
        [SelectionState.range_start]: false,
        [SelectionState.selected]: false
      }),
      "s"
    )
  });
}

/**
 * Return the gridcell element from the screen.
 *
 * @param {Date} date - The date to match the gridcell name.
 * @param {boolean} interactive - If the gridcell is interactive (e.g. in
 *   selection mode).
 */
export function gridcell(date: Date, interactive?: boolean) {
  if (interactive)
    return screen.getByRole("gridcell", {
      name: date.getDate().toString()
    });
  return screen.getByRole("gridcell", {
    name: labelGridcell(date)
  });
}

/**
 * Return the rowheader element from the screen.
 *
 * @param {string} name - The name of the rowheader.
 */
export function rowheader(name?: ByRoleOptions["name"]) {
  return screen.getByRole("rowheader", name ? { name } : undefined);
}

/** Return the year dropdown element from the screen. */
export function yearDropdown() {
  return screen.getByRole("combobox", { name: "Year:" });
}

/** Return the month dropdown. */
export function monthDropdown() {
  return screen.getByRole("combobox", { name: "Month:" });
}

/** Return the currently focused element. */
export function activeElement() {
  if (!document.activeElement)
    throw new Error("Could not find any focused element");
  return document.activeElement;
}
