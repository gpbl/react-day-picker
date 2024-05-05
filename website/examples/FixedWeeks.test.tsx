import { screen } from "@testing-library/react";

import { mockDate, renderApp } from "@/test";

import { FixedWeeks } from "./Fixedweeks";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<FixedWeeks />);
});

test("should render 7 rows", () => {
  expect(screen.getAllByRole("row")).toHaveLength(7);
});
