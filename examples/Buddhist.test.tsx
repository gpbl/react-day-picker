import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { Buddhist } from "./Buddhist";

// Use a fixed date: December 22, 2024 (Gregorian)
const today = new Date(2024, 11, 22);

setTestTime(today);
test("should render BE year with Thai digits in caption", () => {
  render(<Buddhist />);
  expect(grid()).toHaveAccessibleName("ธันวาคม ๒๕๖๗");
});
