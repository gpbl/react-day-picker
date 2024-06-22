import { ByRoleOptions, act, fireEvent, screen } from "@testing-library/react";

import { user } from "./user";

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
 * Return the gridcell element from the screen.
 *
 * @param {Date} date - The date to match the gridcell name.
 */
export function gridcell(date: Date) {
  return screen.getByRole("gridcell", { name: String(date.getDate()) });
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

/** Focuses the days grid. */
export async function focusDaysGrid() {
  // TODO: are these `act` calls necessary?
  await act(() => fireEvent.blur(activeElement())); // Make sure nothing is focused
  await user.tab(); // By pressing tab 3 tim;
  await user.tab();
  await user.tab();
}
