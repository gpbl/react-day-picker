import React from "react";
import { render, screen } from "@/test/render";
import { TestCase2842 } from "./TestCase2842";

beforeEach(async () => {
  render(<TestCase2842 />);
});

test("should render all the grid cells", () => {
  expect(screen.queryAllByRole("gridcell")).toHaveLength(32);
});
