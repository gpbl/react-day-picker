/* eslint-disable jest/no-disabled-tests */
import React from "react";

import { format } from "date-fns";

import { act, render, screen } from "@/test/render";
import { user } from "@/test/user";

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

test("renders a textbox", () => {
  render(<Input />);
  expect(textbox()).toBeInTheDocument();
});

test("updates the calendar when a date is typed in", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await user.type(textbox(), format(testDate, "MM/dd/yyyy"));

  expect(
    screen.getByText(`Selected: ${testDate.toDateString()}`)
  ).toBeInTheDocument();

  expect(selectedCells()).toHaveLength(1);
  expect(selectedCells()[0]).toHaveTextContent(`${testDate.getDate()}`);
});

test("updates the input when a day is picked from the calendar", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await user.type(textbox(), format(testDate, "MM/dd/yyyy"));

  expect(
    screen.getByText(`Selected: ${testDate.toDateString()}`)
  ).toBeInTheDocument();

  expect(selectedCells()).toHaveLength(1);
  expect(selectedCells()[0]).toHaveTextContent(`${testDate.getDate()}`);
});

test("clears the selected days when an invalid date is entered", async () => {
  render(<Input />);
  await user.type(textbox(), "invalid date");
  expect(selectedCells()).toHaveLength(0);
});

test("updates the month when a date is typed in", async () => {
  render(<Input />);
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await user.type(textbox(), format(testDate, "MM/dd/yyyy"));
  expect(screen.getByText(`December 2022`)).toBeInTheDocument();
});
