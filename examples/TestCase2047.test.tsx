import React from "react";

import { dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { TestCase2047 } from "./TestCase2047";

beforeEach(async () => {
  render(<TestCase2047 />);
});

test("disabled date is not selected", () => {
  expect(dateButton(new Date(2024, 5, 10))).not.toHaveAttribute("aria-selected");
});

describe("when the calendar is focused", () => {
  beforeEach(async () => {
    await user.click(dateButton(new Date(2024, 5, 10)));
  });
  test("the disabled day should not have focused modifier", () => {
    expect(dateButton(new Date(2024, 5, 10))).not.toHaveClass("rdp-focused");
  });
});
