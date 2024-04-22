import React from "react";

import Example from "@examples/multiple";
import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { act, render } from "@testing-library/react";

import { getDayButton, getTableFooter } from "../../../test/selectors";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe("when a day is clicked", () => {
  const day1 = new Date(2021, 10, 1);
  beforeEach(async () => act(() => user.click(getDayButton(day1))));
  test("should appear as selected", () => {
    expect(getDayButton(day1)).toHaveAttribute("aria-selected", "true");
  });
  test("should update the footer", () => {
    expect(getTableFooter()).toHaveTextContent("You selected 1 day(s).");
  });
  describe("when a second day is clicked", () => {
    const day2 = new Date(2021, 10, 2);
    beforeEach(async () => act(() => user.click(getDayButton(day2))));
    test("the first day should appear as selected", () => {
      expect(getDayButton(day1)).toHaveAttribute("aria-selected", "true");
    });
    test("the second day should appear as selected", () => {
      expect(getDayButton(day2)).toHaveAttribute("aria-selected", "true");
    });
    test("should update the footer", () => {
      expect(getTableFooter()).toHaveTextContent("You selected 2 day(s).");
    });
  });
});
