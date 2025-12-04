import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";

import { TestCase2864 } from "./TestCase2864";

const january = new Date(2025, 0, 1);
const holidays = [new Date(2025, 0, 10), new Date(2025, 0, 20)];

setTestTime(january);

test.each(holidays)("the holiday %s should be disabled", (day) => {
  render(<TestCase2864 />);
  expect(gridcell(day)).toHaveClass("rdp-disabled");
});
