import React from "react";

import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { ModifiersHidden } from "./ModifiersHidden";

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11),
];

const today = new Date(2021, 10, 25);

setTestTime(today);
test.each(days)("the day %s should be hidden", (day) => {
  render(<ModifiersHidden />);
  expect(
    screen.queryByRole("gridcell", { name: `${day.getDate()}` }),
  ).not.toBeInTheDocument();
});
