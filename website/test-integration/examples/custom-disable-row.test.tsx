import React from "react";

import Example from "@examples/custom-disable-row";
import { axe } from "@site/test/axe";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => {
  container = render(<Example />).container;
});

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test("should render only 3 rows", () => {
  const rowElements = container.getElementsByTagName("tr");
  expect(rowElements).toHaveLength(3);
});
