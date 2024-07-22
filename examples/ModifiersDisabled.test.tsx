import React from "react";

import { dateButton } from "@/test/elements";
import { render } from "@/test/render";

import { ModifiersDisabled } from "./ModifiersDisabled";

const today = new Date(2024, 6, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

const days = [
  new Date(2024, 6, 6),
  new Date(2024, 6, 13),
  new Date(2024, 6, 20),
  new Date(2024, 6, 27)
];

test.each(days)("the day %s should be disabled", (day) => {
  render(<ModifiersDisabled />);
  // return all month's
  expect(dateButton(day)).toBeDisabled();
});
