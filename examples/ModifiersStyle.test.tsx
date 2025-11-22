import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { ModifiersStyle } from "./ModifiersStyle";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<ModifiersStyle />);
});

const days = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
const style = {
  fontWeight: 900,
  color: "rgb(144, 238, 144)",
};
test.each(days)("The day %s should have the proper inline style", (day) => {
  expect(gridcell(day, true)).toHaveStyle(style);
});
