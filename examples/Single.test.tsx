import React from "react";

import { render } from "@testing-library/react";

import { gridcell } from "@/test/elements";
import { user } from "@/test/user";

import { Single } from "./Single";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<Single />);
});

describe("when a day is clicked", () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
    expect(gridcell(day)).toHaveFocus();
    expect(gridcell(day)).toHaveClass("rdp-selected");
  });
  describe("when the day is clicked again", () => {
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test("should not appear as selected", () => {
      expect(gridcell(day)).not.toHaveAttribute("aria-selected");
      expect(gridcell(day)).not.toHaveClass("rdp-selected");
    });
  });
});
