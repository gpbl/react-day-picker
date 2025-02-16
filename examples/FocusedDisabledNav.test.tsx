import React from "react";

import { dateButton, nextButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { FocusedDisabledNav } from "./FocusedDisabledNav";

describe("FocusedDisabledNav", () => {
  test("should not focus the aria-disabled navigation button", async () => {
    render(<FocusedDisabledNav />);
    await user.tab();
    await user.tab();
    await user.keyboard("{enter}");
    expect(dateButton(new Date())).toHaveFocus();
  });
  test("should keep focus on the disabled navigation button", async () => {
    render(<FocusedDisabledNav />);
    await user.tab();
    await user.keyboard("{enter}");
    await user.tab();
    await user.keyboard("{enter}");
    expect(nextButton()).toHaveFocus();
    expect(nextButton()).not.toBeDisabled();
    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
    expect(dateButton(new Date())).not.toHaveFocus();
  });
});
