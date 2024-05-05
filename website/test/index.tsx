import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MockDate from "mockdate";

export { act } from "@testing-library/react";

export function app() {
  return screen.getByRole("application");
}

export function grid(name?: string) {
  return screen.getByRole("grid", { name });
}

export function columnheader(name?: string) {
  return screen.getByRole("columnheader", { name });
}

export function rowheader(name?: string) {
  return screen.getByRole("rowheader", { name });
}

export function gridcell(date: Date) {
  return screen.getByRole("gridcell", { name: date.getDate().toString() });
}

export function monthDropdown() {
  return screen.getByRole("combobox", { name: "Month:" });
}

export function yearDropdown() {
  return screen.getByRole("combobox", { name: "Year:" });
}

export function renderApp(children: React.ReactNode) {
  return render(<div role="application">{children}</div>);
}

export function prevButton() {
  return screen.getByRole("button", { name: "Go to previous month" });
}

export function nextButton() {
  return screen.getByRole("button", { name: "Go to next month" });
}

export function focusedElement() {
  if (!document.activeElement) {
    throw new Error("Could not find any active element");
  }
  return document.activeElement;
}

export function mockDate(date: Date) {
  beforeAll(() => MockDate.set(date));
  afterAll(() => MockDate.reset());
}

export const user = userEvent.setup();
