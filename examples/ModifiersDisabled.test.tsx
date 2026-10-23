import React from "react";

import { activeElement, dateButton } from "@/test/elements";
import { act, render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { ModifiersDisabled } from "./ModifiersDisabled";

const today = new Date(2024, 6, 22);

setTestTime(today);
const days = [
  new Date(2024, 6, 6),
  new Date(2024, 6, 13),
  new Date(2024, 6, 20),
  new Date(2024, 6, 27),
];

test.each(days)("the day %s should be disabled", (day) => {
  render(<ModifiersDisabled />);
  // return all month's
  expect(dateButton(day)).toBeDisabled();
});

describe.each([
  ["Page Down", "{PageDown}", new Date(2024, 6, 10), new Date(2024, 7, 9)],
  ["Page Up", "{PageUp}", new Date(2024, 6, 8), new Date(2024, 5, 7)],
  [
    "Shift + Page Down",
    "{Shift>}{PageDown}{/Shift}",
    new Date(2024, 6, 12),
    new Date(2025, 6, 11),
  ],
  ["Home", "{Home}", new Date(2024, 6, 10), new Date(2024, 6, 8)],
  ["End", "{End}", new Date(2024, 6, 10), new Date(2024, 6, 12)],
])("when pressing %s and the target day is disabled", (_key, keys, from, to) => {
  beforeEach(async () => {
    render(<ModifiersDisabled />);
    act(() => dateButton(from).focus());
    await user.keyboard(keys);
  });

  test("should focus the nearest enabled day", () => {
    expect(activeElement()).toBe(dateButton(to));
  });
});
