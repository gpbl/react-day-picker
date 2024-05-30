import React from "react";

import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { TestCase1567 } from "./Testcase1567";

beforeEach(async () => {
  render(<TestCase1567 />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.tab();
});

test("the button should have focus", () => {
  expect(
    screen.getByRole("button", { name: "I should be focusable" })
  ).toHaveFocus();
});
