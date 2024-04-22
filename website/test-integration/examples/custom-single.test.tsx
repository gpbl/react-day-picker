import React from "react";

import Example from "@examples/custom-single";
import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { getDayButton, getTableFooter } from "../../../test/selectors";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

describe("when a day is clicked", () => {
  const day = new Date(2021, 10, 1);
  beforeEach(() => act(() => user.click(getDayButton(day))));
  test("should appear as selected", () => {
    expect(getDayButton(day)).toHaveAttribute("aria-selected", "true");
  });
  test("should update the footer", () => {
    expect(getTableFooter()).toHaveTextContent("You selected Mon Nov 01 2021.");
  });
});
