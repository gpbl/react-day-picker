import React from "react";

import { render, screen } from "@/test/render";

import { CustomDayDate } from "./CustomDayDate";

jest.useFakeTimers().setSystemTime(new Date(2021, 10, 25));

beforeEach(() => {
  render(<CustomDayDate />);
});

test("should render the emoji", () => {
  expect(screen.getByText("🎉")).toBeInTheDocument();
});
