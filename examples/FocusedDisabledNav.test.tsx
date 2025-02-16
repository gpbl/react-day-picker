import React from "react";

import { dateButton, nextButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { user } from "@/test/user";

import { FocusedDisabledNav } from "./FocusedDisabledNav";

const today = new Date();

describe("FocusedDisabledNav", () => {
  test("should not focus the aria-disabled navigation button", async () => {
    render(<FocusedDisabledNav />);
    await user.tab();
    expect(previousButton()).toHaveFocus();
    await user.tab();
    expect(nextButton()).not.toHaveFocus();
    expect(dateButton(today)).toHaveFocus(); // should ignore next button and focus today's date
  });
  test("should keep focus on the disabled navigation button", async () => {
    render(<FocusedDisabledNav />);
    await user.tab();
    await user.keyboard("{enter}");
    expect(previousButton()).toHaveFocus();
    await user.tab();
    expect(nextButton()).toHaveFocus();
    await user.keyboard("{enter}");
    expect(nextButton()).toHaveFocus();
    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
    expect(nextButton()).not.toBeDisabled();
    expect(dateButton(today)).not.toHaveFocus();
  });
});
