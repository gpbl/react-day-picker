import React from "react";

import { render, screen } from "@/test/render";

import { CustomDay } from "./CustomDay";

jest.useFakeTimers().setSystemTime(new Date(2021, 10, 25));

beforeEach(() => {
  render(<CustomDay />);
});

test("should render the emoji", () => {
  expect(screen.getByText("🎉19")).toBeInTheDocument();
});
