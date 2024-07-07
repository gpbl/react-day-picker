import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { SingleRequired } from "./SingleRequired";

beforeEach(() => {
  render(<SingleRequired />);
});

describe("when a day is clicked", () => {
  const day = new Date();
  beforeEach(async () => {
    await user.click(dateButton(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the day is clicked again", () => {
    beforeEach(async () => {
      await user.click(dateButton(day));
    });
    test("should appear as selected", () => {
      expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
    });
  });
});
