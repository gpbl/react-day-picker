import React from "react";

import { activeElement, dateButton, grid } from "@/test/elements";
import { act, render, screen } from "@/test/render";
import { user } from "@/test/user";
import { ControlledMonthFocus } from "./ControlledMonthFocus";

const march = new Date(2026, 2, 15);
const november = new Date(2026, 10, 15);

describe("when J changes the month while a day is focused", () => {
  beforeEach(async () => {
    render(<ControlledMonthFocus />);
    act(() => dateButton(march).focus());
    await user.keyboard("j");
  });

  test("displays the new month", () => {
    expect(grid()).toHaveAccessibleName("November 2026");
  });

  test("focuses the selected day in the new month", () => {
    expect(activeElement()).toBe(dateButton(november));
  });
});

describe("when the external button changes the month", () => {
  let jumpButton: HTMLButtonElement;

  beforeEach(async () => {
    render(<ControlledMonthFocus />);
    jumpButton = screen.getByRole("button", { name: "Jump to November" });
    await user.click(jumpButton);
  });

  test("displays the new month", () => {
    expect(grid()).toHaveAccessibleName("November 2026");
  });

  test("keeps focus on the external button", () => {
    expect(activeElement()).toBe(jumpButton);
  });
});
