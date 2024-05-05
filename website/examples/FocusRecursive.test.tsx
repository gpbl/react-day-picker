import { render } from "@testing-library/react";

import { focusedElement, mockDate, gridcell, renderApp, user } from "@/test";

import { FocusRecursive } from "./FocusRecursive";

test("the first selected day should have focus", async () => {
  render(<FocusRecursive />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(focusedElement(), "{arrowdown}");
  await user.type(focusedElement(), "{arrowdown}");
  await user.type(focusedElement(), "{arrowdown}");
  await user.type(focusedElement(), "{arrowdown}");

  expect(gridcell(new Date(2022, 5, 22))).toHaveFocus();
});
