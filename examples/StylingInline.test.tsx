import React from "react";

import { render, screen } from "@/test/render";

import { StylingInline } from "./StylingInline";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  render(<StylingInline />);
});

// eslint-disable-next-line jest/no-disabled-tests
test("the caption should apply the custom style", () => {
  expect(screen.getByRole("status").parentElement).toHaveStyle({
    color: "red"
  });
});
