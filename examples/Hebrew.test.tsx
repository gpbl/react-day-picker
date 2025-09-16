import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Hebrew } from "./Hebrew";

const today = new Date(2024, 9, 3);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("renders Hebrew caption with Hebrew locale defaults", () => {
  render(<Hebrew />);
  expect(grid("תשרי 5785")).toBeInTheDocument();
});
