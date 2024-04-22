import React from "react";

import Example from "@examples/spanish";
import { axe } from "@site/test/axe";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { getMonthCaption } from "../../../test/selectors";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

let container: HTMLElement;
beforeEach(() => (container = render(<Example />).container));

test("should not have AXE violations", async () => {
  expect(await axe(container)).toHaveNoViolations();
});

test("should localize the caption in Spanish", () => {
  expect(getMonthCaption()).toHaveTextContent("noviembre 2021");
});
