import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { DefaultMonth } from "./DefaultMonth";

const today = new Date(2022, 5, 10);
jest.useFakeTimers().setSystemTime(today);

test("should display September 1979", () => {
  render(<DefaultMonth />);
  expect(grid("September 1979")).toBeInTheDocument();
});
