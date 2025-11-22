import { startOfMonth } from "date-fns";
import React from "react";

import { dateButton } from "@/test/elements";
import { fireEvent, render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { CustomDayButton } from "./CustomDayButton";

const today = new Date(2021, 10, 25);
setTestTime(today);
beforeEach(() => {
  render(<CustomDayButton />);
});

test("update the footer when a day is double clicked", () => {
  fireEvent.doubleClick(dateButton(today));
  expect(screen.getByText(today.toDateString())).toBeInTheDocument();
});

test("update the footer when a day is single clicked", () => {
  fireEvent.click(dateButton(startOfMonth(today)));
  expect(screen.getByText(/Double click to select a date/)).toBeInTheDocument();
});
