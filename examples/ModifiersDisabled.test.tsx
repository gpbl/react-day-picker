import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";

import { ModifiersDisabled } from "./ModifiersDisabled";

const days = [
  new Date(2024, 5, 2),
  new Date(2024, 5, 9),
  new Date(2024, 5, 29)
];

test.each(days)("the day %s should be disabled", (day) => {
  render(<ModifiersDisabled />);
  expect(gridcell(day)).toHaveAttribute("aria-disabled", "true");
});
