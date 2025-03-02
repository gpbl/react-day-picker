import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { EthiopicGeez } from "./EthiopicGeez";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render Tahsas 2017 with latin numerals", () => {
  render(<EthiopicGeez />);
  expect(grid("Tahsas 2017")).toBeInTheDocument();
});

test("should render December 2024 with latin numerals", () => {
  render(<EthiopicGeez />);
  expect(grid("December 2024")).toBeInTheDocument();
});
