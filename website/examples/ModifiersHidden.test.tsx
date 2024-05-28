import { screen } from "@testing-library/react";

import { mockDate, renderApp } from "../test-v8";

import { ModifiersHidden } from "./ModifiersHidden";

const days = [
  new Date(2022, 5, 10),
  new Date(2022, 5, 20),
  new Date(2022, 5, 11)
];

const today = new Date(2021, 10, 25);
mockDate(today);

test.each(days)("the day %s should be hidden", (day) => {
  renderApp(<ModifiersHidden />);
  expect(
    screen.queryByRole("gridcell", { name: `${day.getDate()}` })
  ).not.toBeInTheDocument();
});
