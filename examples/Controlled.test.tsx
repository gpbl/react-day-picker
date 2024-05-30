import React from "react";

import { grid } from "@/test/elements";
import { act, render, screen } from "@/test/render";
import { user } from "@/test/user";

import { Controlled } from "./Controlled";

jest.useFakeTimers().setSystemTime(new Date(2022, 5, 10));

describe('when the "Today" button is clicked', () => {
  const todayButton = () => screen.getByRole("button", { name: "Go to Today" });
  beforeEach(async () => {
    render(<Controlled />);
    await act(() => user.click(todayButton()));
  });
  test("the button should be disabled", async () => {
    expect(todayButton()).toBeDisabled();
  });
  test("should display the current month", () => {
    expect(grid()).toHaveAccessibleName("June 2022");
  });
});
