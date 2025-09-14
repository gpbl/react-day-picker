import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { EthiopicLatin } from "./EthiopicLatin";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render Tahsas 2017 with latin numerals", () => {
  render(<EthiopicLatin />);
  expect(grid("Tahsas 2017")).toBeInTheDocument();
});
