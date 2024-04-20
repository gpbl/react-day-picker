import React from "react";

import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { act, render } from "@testing-library/react";

import { getTableFooter, getWeekButton } from "../../../test/selectors";

import Example from "@examples/weeknumber";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    beforeEach(async () => act(() => user.click(getWeekButton(45))));
    test("should update the footer", () => {
      expect(getTableFooter()).toHaveTextContent("You clicked the week n. 45.");
    });
  });
});
