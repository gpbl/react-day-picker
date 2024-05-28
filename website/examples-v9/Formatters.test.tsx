import { render, screen } from "@testing-library/react";

import { mockDate } from "@/test";

import { Formatters } from "./Formatters";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  render(<Formatters />);
});

test("should display the autumn emoji", () => {
  expect(screen.getByText("🍂 November")).toBeInTheDocument();
});
