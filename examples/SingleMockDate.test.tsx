/* This test uses mockdate to ensure date mocking works as it should. */
import React from "react";

import { render } from "@testing-library/react";
import MockDate from "mockdate";

import { dateButton, gridcell } from "@/test/elements";
import { user } from "@/test/user";

import { Single } from "./Single";

const today = new Date(2021, 10, 25);

beforeAll(() => MockDate.set(today));
afterAll(() => MockDate.reset());

beforeEach(() => {
  render(<Single />);
});

describe("when a day is clicked", () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(dateButton(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day, true)).toHaveAttribute("aria-selected", "true");
    expect(dateButton(day)).toHaveFocus();
    expect(gridcell(day, true)).toHaveClass("rdp-selected");
  });
  describe("when the day is clicked again", () => {
    beforeEach(async () => {
      await user.click(dateButton(day));
    });
    test("should not appear as selected", () => {
      expect(gridcell(day, true)).not.toHaveAttribute("aria-selected");
    });
  });
});
