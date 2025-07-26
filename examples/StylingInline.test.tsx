import React from "react";

import { render, screen } from "@/test/render";

import { StylingInline } from "./StylingInline";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<StylingInline />);
});

test("the caption should apply the custom style", () => {
  expect(screen.getByRole("status").parentElement).toHaveStyle({
    color: "rgb(255, 0, 0)"
  });
});
