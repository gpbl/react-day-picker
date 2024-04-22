import React from "react";

import Example from "@examples/disabled";
import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";
import { setDate } from "date-fns";

import {
  getDayButton,
  getFocusedElement,
  getMonthCaption,
  queryPrevButton
} from "../../../test/selectors";

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test("should not display the previous button", () => {
  expect(queryPrevButton()).not.toBeInTheDocument();
});

describe("when the first day is focused", () => {
  const firstDay = setDate(today, 1);
  beforeEach(async () => {
    getDayButton(firstDay).focus();
  });
  describe("when the Arrow Left is pressed", () => {
    beforeEach(async () => {
      await user.type(getFocusedElement(), "{arrowleft}");
    });
    test("should still display the same month", () => {
      expect(getMonthCaption()).toHaveTextContent("June 2022");
    });

    test("should not have AXE violations", async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
describe("when the last day is focused", () => {
  describe("when the Arrow Right is pressed", () => {
    beforeEach(async () => {
      await user.type(getFocusedElement(), "{arrowleft}");
    });
    test("should still display the same month", () => {
      expect(getMonthCaption()).toHaveTextContent("June 2022");
    });
    test("should not have AXE violations", async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
