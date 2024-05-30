/* eslint-disable jest/no-disabled-tests */
import React from "react";

import { userEvent } from "@testing-library/user-event";
import { format } from "date-fns";

import { render, screen } from "@/test/render";

import { Input } from "./Input";

function textbox() {
  return screen.getByRole("textbox", { name: "Date:" }) as HTMLInputElement;
}

function gridcells() {
  return screen.queryAllByRole("gridcell") as HTMLTableCellElement[];
}

function selectedCells() {
  return gridcells().filter((cell) => cell.hasAttribute("aria-selected"));
}

test.skip("renders a textbox", () => {
  render(<Input />);
  expect(textbox()).toBeInTheDocument();
});

test.skip("updates the calendar when a date is typed in", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await act(() => userEvent.type(textbox(), format(testDate, "MM/dd/yyyy")));

  expect(
    screen.getByText(`Selected: ${testDate.toDateString()}`)
  ).toBeInTheDocument();

  expect(selectedCells()).toHaveLength(1);
  expect(selectedCells()[0]).toHaveTextContent(`${testDate.getDate()}`);
});

test.skip("updates the input when a day is picked from the calendar", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await userEvent.type(textbox(), format(testDate, "MM/dd/yyyy"));

  expect(
    screen.getByText(`Selected: ${testDate.toDateString()}`)
  ).toBeInTheDocument();

  expect(selectedCells()).toHaveLength(1);
  expect(selectedCells()[0]).toHaveTextContent(`${testDate.getDate()}`);
});

test.skip("clears the selected days when an invalid date is entered", async () => {
  render(<Input />);
  await userEvent.type(textbox(), "invalid date");
  expect(selectedCells()).toHaveLength(0);
});

test.skip("updates the month when a date is typed in", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await userEvent.type(textbox(), format(testDate, "MM/dd/yyyy"));
  expect(screen.getByText(`December 2022`)).toBeInTheDocument();
});
