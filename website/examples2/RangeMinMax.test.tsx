import React from "react";

import { setDate } from "date-fns";

import { act, getDayButton, mockDate, renderApp, user } from "@/test";

import { RangeMinMax } from "./RangeMinMax";

const today = new Date(2022, 8, 25);
mockDate(today);

beforeEach(() => renderApp(<RangeMinMax />).container);

describe("when the first day is clicked", () => {
  const fromDay = setDate(today, 14);
  beforeEach(async () => act(() => user.click(getDayButton(fromDay))));
  test("the clicked day should be selected", () => {
    expect(getDayButton(fromDay)).toHaveAttribute("aria-selected", "true");
  });
  test("the days below the min value should be disabled", () => {
    expect(getDayButton(setDate(today, 13))).toBeDisabled();
    expect(getDayButton(setDate(today, 14))).toBeDisabled();
    expect(getDayButton(setDate(today, 15))).toBeDisabled();
  });
  test("the days between max and min should be enabled", () => {
    expect(getDayButton(setDate(today, 9))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 10))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 11))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 12))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 16))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 17))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 18))).not.toBeDisabled();
    expect(getDayButton(setDate(today, 19))).not.toBeDisabled();
  });
  test("the days above the max value should be disabled", () => {
    expect(getDayButton(setDate(today, 7))).toBeDisabled();
    expect(getDayButton(setDate(today, 8))).toBeDisabled();
    expect(getDayButton(setDate(today, 20))).toBeDisabled();
    expect(getDayButton(setDate(today, 21))).toBeDisabled();
  });
});
