import React from "react";

import { activeElement, dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { FocusRecursive } from "./FocusRecursive";

const today = new Date(2022, 5, 10);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("the first selected day should have focus", async () => {
  render(<FocusRecursive />).container;
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  expect(dateButton(new Date(2022, 5, 22))).toHaveFocus();
});
