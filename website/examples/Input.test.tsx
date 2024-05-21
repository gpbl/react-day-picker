import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { format } from "date-fns";

import { Input } from "./Input";

it("renders a textbox", () => {
  render(<Input />);
  expect(screen.getByRole("textbox", { name: /Date:/i })).toBeInTheDocument();
});

it("updates input value when a date is selected", async () => {
  render(<Input />);
  const input = screen.getByRole("textbox", {
    name: /Date:/i
  }) as HTMLInputElement;
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await userEvent.type(input, format(testDate, "MM/dd/yyyy"));
  expect(
    screen.getByText(`Selected: ${testDate.toDateString()}`)
  ).toBeInTheDocument();
});

it("clears the input value when an invalid date is entered", async () => {
  render(<Input />);
  const input = screen.getByRole("textbox", {
    name: /Date:/i
  }) as HTMLInputElement;
  await userEvent.type(input, "invalid date");
  expect(input.value).toBe("invalid date");
});

it("clears the selected grid cells when the input is cleared", async () => {
  render(<Input />);
  const input = screen.getByRole("textbox", {
    name: /Date:/i
  }) as HTMLInputElement;
  await userEvent.type(input, "12/31/2022");
  await userEvent.clear(input);
  const gridCells = screen.queryAllByRole("gridcell") as HTMLTableCellElement[];

  expect(
    gridCells.filter((cell) => cell.hasAttribute("aria-selected"))
  ).toHaveLength(0);
});

it("updates the month when a date is selected", async () => {
  render(<Input />);
  const input = screen.getByRole("textbox", { name: /Date:/i });
  const testDate = new Date(2022, 11, 31); // Dec 31, 2022
  await userEvent.type(input, format(testDate, "MM/dd/yyyy"));
  expect(screen.getByText(`December 2022`)).toBeInTheDocument();
});
