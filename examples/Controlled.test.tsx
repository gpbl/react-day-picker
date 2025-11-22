import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { Controlled } from "./Controlled";

setTestTime(new Date(2022, 5, 10));
describe('when the "Today" button is clicked', () => {
  const todayButton = () => screen.getByRole("button", { name: "Go to Today" });
  beforeEach(async () => {
    render(<Controlled />);
    await user.click(todayButton());
  });
  test("the button should be disabled", async () => {
    expect(todayButton()).toBeDisabled();
  });
  test("should display the current month", () => {
    expect(grid()).toHaveAccessibleName("June 2022");
  });
});
