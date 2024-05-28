import { mockDate, gridcell, renderApp } from "../test-v8";

import { ModifiersStyle } from "./ModifiersStyle";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<ModifiersStyle />);
});

const days = [new Date(2021, 5, 23), new Date(2021, 5, 24)];
const style = {
  fontWeight: 900,
  color: "lightgreen"
};
test.each(days)("The day %s should have the proper inline style", (day) => {
  expect(gridcell(day)).toHaveStyle(style);
});
