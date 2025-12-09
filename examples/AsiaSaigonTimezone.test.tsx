import React from "react";

import { render, screen } from "@/test/render";
import { AsiaSaigonTimezone } from "./AsiaSaigonTimezone";

beforeEach(() => {
  render(<AsiaSaigonTimezone />);
});

test.skip('should have the "id" attribute', () => {
  expect(
    screen.getAllByRole("row")[0].querySelectorAll("[role='gridcell']"),
  ).toHaveLength(7);
});
