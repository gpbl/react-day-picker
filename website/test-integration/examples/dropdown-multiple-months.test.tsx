import React from "react";

import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { act, render, screen } from "@testing-library/react";

import { getMonthGrid } from "react-day-picker/test/selectors";

import Example from "@examples/dropdown-multiple-months";

const today = new Date(2023, 9, 16);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test("should display 5 year dropdowns", () => {
  expect(screen.getAllByRole("combobox", { name: "Year:" })).toHaveLength(5);
});
test("should display 5 month dropdowns", () => {
  expect(screen.getAllByRole("combobox", { name: "Month:" })).toHaveLength(5);
});

describe("when choosing a month from the first drop-down", () => {
  const newMonthName = "January";
  beforeEach(() => {
    const firstDropDown = screen.getAllByRole("combobox", {
      name: "Month:"
    })[0];
    return act(() => user.selectOptions(firstDropDown, newMonthName));
  });
  test("should display the month in the first dropdown", () => {
    expect(getMonthGrid(0)).toHaveAccessibleName(`${newMonthName} 2023`);
  });
});

describe("when choosing a month from the third drop-down", () => {
  const newMonthName = "October";
  beforeEach(() => {
    const thirdDropDown = screen.getAllByRole("combobox", {
      name: "Month:"
    })[2];
    return act(() => user.selectOptions(thirdDropDown, newMonthName));
  });
  test("should display the month selected the third dropdown", () => {
    expect(getMonthGrid(2)).toHaveAccessibleName(`${newMonthName} 2023`);
  });
});
