import React from "react";

import { dateButton, gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { ControlledSelection } from "./ControlledSelection";

const today = new Date(2024, 8, 17);
const rangeStart = new Date(2024, 8, 1);
const rangeMiddle = new Date(2024, 8, 2);
const rangeEndBeforeReset = new Date(2024, 8, 3);
const rangeEnd = new Date(2024, 8, 4);
const resetDay = new Date(2024, 8, 5);
const unselectedDay = new Date(2024, 8, 6);

setTestTime(today);

describe("when a range is selected", () => {
  beforeEach(async () => {
    render(<ControlledSelection />);
    await user.click(dateButton(rangeStart));
    await user.click(dateButton(rangeEnd));
  });

  test("the first day appears selected", () => {
    expect(gridcell(rangeStart, true)).toHaveAttribute("aria-selected", "true");
  });

  test("a middle day appears selected", () => {
    expect(gridcell(rangeMiddle, true)).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the day before the range end appears selected", () => {
    expect(gridcell(rangeEndBeforeReset, true)).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the last day appears selected", () => {
    expect(gridcell(rangeEnd, true)).toHaveAttribute("aria-selected", "true");
  });

  test("the following day does not appear selected", () => {
    expect(gridcell(resetDay, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});

describe("when a third date is clicked", () => {
  let consoleLogSpy: jest.SpiedFunction<typeof console.log>;

  beforeEach(async () => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<ControlledSelection />);
    await user.click(dateButton(rangeStart));
    await user.click(dateButton(rangeEnd));
    await user.click(dateButton(resetDay));
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("logs the reset", () => {
    expect(consoleLogSpy).toHaveBeenCalledWith("reset range");
  });

  test("the original first day does not appear selected", () => {
    expect(gridcell(rangeStart, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the original middle day does not appear selected", () => {
    expect(gridcell(rangeMiddle, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the day before the original range end does not appear selected", () => {
    expect(gridcell(rangeEndBeforeReset, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the original last day does not appear selected", () => {
    expect(gridcell(rangeEnd, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  test("the reset day appears selected", () => {
    expect(gridcell(resetDay, true)).toHaveAttribute("aria-selected", "true");
  });

  test("the following day does not appear selected", () => {
    expect(gridcell(unselectedDay, true)).not.toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
