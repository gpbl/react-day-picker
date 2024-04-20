import React from "react";

import { axe } from "@site/test/axe";
import { user } from "@site/test/user";
import { freezeBeforeAll } from "@site/test/utils";
import { act, render, screen } from "@testing-library/react";

import { getMonthGrid, getPrevButton } from "react-day-picker/test/selectors";

import Example from "@examples/multiple-months";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);
let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test("should render 2 grids", () => {
  expect(screen.getAllByRole("grid")).toHaveLength(2);
});

test("the table ids should include the display index", () => {
  const tableId1 = getMonthGrid(0).getAttribute("id");
  const tableId2 = getMonthGrid(1).getAttribute("id");
  expect(tableId1).toEqual("example-grid-0");
  expect(tableId2).toEqual("example-grid-1");
});

test("the first grid should be November", () => {
  const grids = screen.getAllByRole("grid");
  expect(grids[0]).toHaveAccessibleName("November 2021");
});

test("the second grid should be December", () => {
  const grids = screen.getAllByRole("grid");
  expect(grids[1]).toHaveAccessibleName("December 2021");
});

// Test pagination
describe("when the previous month button is clicked", () => {
  beforeEach(async () => act(() => user.click(getPrevButton())));
  test("the first month should be October", () => {
    const grids = screen.getAllByRole("grid");
    expect(grids[0]).toHaveAccessibleName("October 2021");
  });

  test("the first month should be November", () => {
    const grids = screen.getAllByRole("grid");
    expect(grids[1]).toHaveAccessibleName("November 2021");
  });
  test("should not have AXE violations", async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
});
