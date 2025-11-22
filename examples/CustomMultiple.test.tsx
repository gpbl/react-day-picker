import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { CustomMultiple } from "./CustomMultiple";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<CustomMultiple />);
});

describe("when a day is clicked", () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(dateButton(day1));
  });
  test("should appear as selected", () => {
    expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
  });
  test("should update the footer", () => {
    expect(screen.getByText("You selected 1 days.")).toBeInTheDocument();
  });
  describe("when a second day is clicked", () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(async () => {
      await user.click(dateButton(day2));
    });
    test("the first day should appear as selected", () => {
      expect(gridcell(day1, true)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(gridcell(day2, true)).toHaveAttribute("aria-selected", "true");
    });
    test("should update the footer", () => {
      expect(screen.getByText("You selected 2 days.")).toBeInTheDocument();
    });
  });
});
