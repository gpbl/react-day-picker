import React from "react";

import { grid, gridcell, nextButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { StartEndMonths } from "./StartEndMonths";

beforeEach(() => {
  render(<StartEndMonths />);
});

test("the first month should be January 2024", () => {
  expect(grid("January 2024")).toBeInTheDocument();
  expect(gridcell(new Date(2024, 0, 31))).toBeInTheDocument();
});

describe("when navigating to the last month", () => {
  beforeEach(async () => {
    // click next button 24 times
    for (let i = 0; i < 24; i++) {
      await user.click(nextButton());
    }
  });

  test("the last month should be December 2025", () => {
    expect(grid("December 2025")).toBeInTheDocument();
    expect(gridcell(new Date(2025, 11, 31))).toBeInTheDocument();
  });
});
