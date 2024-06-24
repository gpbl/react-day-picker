import React from "react";

import { gridcell } from "@/test/elements";
import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { CustomSingle } from "./CustomSingle";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<CustomSingle />);
});

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await user.click(gridcell(today));
  });
  test("should appear as selected", () => {
    expect(gridcell(today)).toHaveAttribute("aria-selected", "true");
  });
  test("should update the footer", () => {
    expect(
      screen.getByText("You selected Thu Nov 25 2021")
    ).toBeInTheDocument();
  });
  describe("when clicking the day again", () => {
    beforeEach(async () => {
      await user.click(gridcell(today));
    });
    test("should not appear as selected", () => {
      expect(gridcell(today)).not.toHaveAttribute("aria-selected", "true");
    });
    test("should update the footer", () => {
      expect(
        screen.queryByText("You selected Thu Nov 25 2021")
      ).not.toBeInTheDocument();
    });
  });
});
