import { render } from "@testing-library/react";

import { gridcell } from "../test-v8";

import { ModifiersDisabled } from "./ModifiersDisabled";

const days = [
  new Date(2024, 5, 2),
  new Date(2024, 5, 9),
  new Date(2024, 5, 29)
];

test.each(days)("the day %s should be disabled", (day) => {
  render(<ModifiersDisabled />);
  expect(gridcell(day)).toBeDisabled();
});
