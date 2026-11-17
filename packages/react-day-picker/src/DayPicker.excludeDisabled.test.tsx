import React from "react";
import { dateButton } from "@/test/elements";
import { fireEvent, render } from "@/test/render";
import { DayPicker } from "./DayPicker";
import type { DateRange, Matcher } from "./types";

const from = new Date(2026, 10, 7);
const disabledDate = new Date(2026, 10, 9);
const to = new Date(2026, 10, 11);
const matchers: [string, Matcher | Matcher[]][] = [
  ["from-only range", { from: disabledDate }],
  ["to-only range", { from: undefined, to: disabledDate }],
  ["matcher array", [false, { from: disabledDate }]],
];

test.each(matchers)("excludes a disabled %s", (_name, disabled) => {
  const onSelect = jest.fn();
  function Calendar() {
    const [selected, setSelected] = React.useState<DateRange>();
    return (
      <DayPicker
        mode="range"
        defaultMonth={from}
        selected={selected}
        onSelect={(range) => {
          onSelect(range);
          setSelected(range);
        }}
        disabled={disabled}
        excludeDisabled
      />
    );
  }
  render(<Calendar />);
  const disabledButton = dateButton(disabledDate);
  expect(disabledButton).toBeDisabled();
  fireEvent.click(dateButton(from));
  fireEvent.click(dateButton(to));
  expect(onSelect).toHaveBeenLastCalledWith({ from: to, to: undefined });
  expect(disabledButton.closest("[data-day]")).not.toHaveAttribute(
    "data-selected",
    "true",
  );
  expect(dateButton(to).closest("[data-day]")).toHaveAttribute(
    "data-selected",
    "true",
  );
});

test("allows a disabled incomplete range when excludeDisabled is false", () => {
  const onSelect = jest.fn();
  render(
    <DayPicker
      mode="range"
      defaultMonth={from}
      selected={{ from }}
      onSelect={onSelect}
      disabled={{ from: disabledDate }}
    />,
  );
  expect(dateButton(disabledDate)).toBeDisabled();
  fireEvent.click(dateButton(to));
  expect(onSelect.mock.calls[0][0]).toEqual({ from, to });
});
