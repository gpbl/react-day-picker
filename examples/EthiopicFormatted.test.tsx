import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { EthiopicFormatted } from "./EthiopicFormatted";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render December 2024", () => {
  render(<EthiopicFormatted />);
  expect(grid("December 2024")).toBeInTheDocument();
});

test("should show selected date in footer", () => {
  const { container } = render(<EthiopicFormatted />);
  expect(container).toHaveTextContent("Selected: 04/14/2017");
}); 