import React from "react";

import { render, screen } from "@/test/render";

import { TestCase2511 } from "./TestCase2511";

beforeEach(async () => {
  render(<TestCase2511 />);
});

test("first weekday is Monday", () => {
  const weekdaysElements = screen.queryAllByRole("columnheader");
  expect(weekdaysElements[0]).toHaveAccessibleName("Monday");
});
