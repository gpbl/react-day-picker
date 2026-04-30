import React from "react";

import { dateButton, nextButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";

import { FocusedDisabledNav } from "./FocusedDisabledNav";

const today = new Date(2025, 2, 8);

setTestTime(today);

describe("FocusedDisabledNav", () => {
  beforeEach(() => {
    render(<FocusedDisabledNav />);
  });

  describe("when navigation receives focus", () => {
    beforeEach(async () => {
      await user.tab();
    });

    test("focuses the previous button", () => {
      expect(previousButton()).toHaveFocus();
    });
  });

  describe("when tabbing through navigation", () => {
    beforeEach(async () => {
      await user.tab();
      await user.tab();
    });

    test("does not focus the aria-disabled navigation button", () => {
      expect(nextButton()).not.toHaveFocus();
    });

    test("focuses today's date after the previous button", () => {
      expect(dateButton(today)).toHaveFocus();
    });
  });

  describe("when pressing the disabled navigation button", () => {
    beforeEach(async () => {
      await user.tab();
      await user.keyboard("{enter}");
      await user.tab();
      await user.keyboard("{enter}");
    });

    test("keeps focus on the disabled navigation button", () => {
      expect(nextButton()).toHaveFocus();
    });

    test("marks the disabled navigation button as aria-disabled", () => {
      expect(nextButton()).toHaveAttribute("aria-disabled", "true");
    });

    test("does not disable the navigation button element", () => {
      expect(nextButton()).not.toBeDisabled();
    });

    test("does not focus today's date", () => {
      expect(dateButton(today)).not.toHaveFocus();
    });
  });
});
