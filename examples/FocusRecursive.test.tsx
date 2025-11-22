import React from "react";

import { activeElement, dateButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { FocusRecursive } from "./FocusRecursive";

const today = new Date(2022, 5, 10);

setTestTime(today);
test("the first selected day should have focus", async () => {
  render(<FocusRecursive />);
  await user.tab();
  await user.tab();
  await user.tab();
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  await user.type(activeElement(), "{arrowdown}");
  expect(dateButton(new Date(2022, 5, 22))).toHaveFocus();
});
