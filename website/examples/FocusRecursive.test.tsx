import {
  act,
  focusedElement,
  getDayButton,
  mockDate,
  renderApp,
  user
} from "@/test";

import { FocusRecursive } from "./FocusRecursive";

const today = new Date(2022, 5, 10);

mockDate(today);

// eslint-disable-next-line jest/no-disabled-tests
test.skip("the first selected day should have focus", async () => {
  renderApp(<FocusRecursive />).container;
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.tab());
  await act(() => user.type(focusedElement(), "{arrowdown}"));
  await act(() => user.type(focusedElement(), "{arrowdown}"));
  await act(() => user.type(focusedElement(), "{arrowdown}"));
  await act(() => user.type(focusedElement(), "{arrowdown}"));
  expect(getDayButton(new Date(2022, 5, 22))).toHaveFocus();
});
