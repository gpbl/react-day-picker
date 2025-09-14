import React from "react";

import { render, screen } from "@/test/render";

import { TestCase2585 } from "./TestCase2585";

render(<TestCase2585 />);

test("should render 42*12 days", () => {
  expect(screen.getAllByRole("gridcell", { hidden: true })).toHaveLength(
    42 * 12,
  );
});
