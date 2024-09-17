import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { ControlledSelection } from "./ControlledSelection";

const today = new Date(2024, 8, 17);
beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(async () => {});

test("a range is selected after clicking two dates", async () => {
  render(<ControlledSelection />);
  await user.click(dateButton(new Date(2024, 8, 1)));
  await user.click(dateButton(new Date(2024, 8, 4)));

  expect(gridcell(new Date(2024, 8, 1), true)).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 2), true)).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 3), true)).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 4), true)).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 5), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );
});

test("a range is reset after clicking a third date", async () => {
  const consoleSpy = jest.spyOn(console, "log");
  render(<ControlledSelection />);
  await user.click(dateButton(new Date(2024, 8, 1)));
  await user.click(dateButton(new Date(2024, 8, 4)));
  await user.click(dateButton(new Date(2024, 8, 5)));
  // eslint-disable-next-line no-console
  expect(console.log).toHaveBeenCalledWith("reset range");
  expect(gridcell(new Date(2024, 8, 1), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 2), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 3), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 4), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 5), true)).toHaveAttribute(
    "aria-selected",
    "true"
  );
  expect(gridcell(new Date(2024, 8, 6), true)).not.toHaveAttribute(
    "aria-selected",
    "true"
  );

  consoleSpy.mockRestore();
});
