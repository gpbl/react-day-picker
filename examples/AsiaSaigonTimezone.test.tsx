import React from "react";

import { render, screen } from "@/test/render";
import { AsiaSaigonTimezone } from "./AsiaSaigonTimezone";

beforeEach(() => {
  render(<AsiaSaigonTimezone />);
});

test.skip("the first row should display 7 days", () => {
  expect(
    screen.getAllByRole("row")[0].querySelectorAll("[role='gridcell']"),
  ).toHaveLength(7);
});
