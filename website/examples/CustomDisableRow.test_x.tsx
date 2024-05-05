import { render, screen } from "@testing-library/react";

import { mockDate } from "@/test";

import { CustomDisableRow } from "./CustomDisableRow";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  render(<CustomDisableRow />);
});

test("should have only 3 rows", () => {
  expect(screen.getAllByRole("row")).toHaveLength(3);
});
