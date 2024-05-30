import React from "react";

import { activeElement, gridcell } from "@/test/elements";
import { act, render } from "@/test/render";
import { user } from "@/test/user";

import { FocusRecursive } from "./FocusRecursive";

const today = new Date(2022, 5, 10);

jest.useFakeTimers().setSystemTime(today);

test("the first selected day should have focus", async () => {
  render(<FocusRecursive />).container;
  await act(() => user.tab());
  await act(() => user.type(activeElement(), "{arrowdown}"));
  await act(() => user.type(activeElement(), "{arrowdown}"));
  await act(() => user.type(activeElement(), "{arrowdown}"));
  await act(() => user.type(activeElement(), "{arrowdown}"));
  expect(gridcell(new Date(2022, 5, 22))).toHaveFocus();
});
