import React from "react";

import Example from "@examples/spanish-week-starts-on";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { getMonthGrid } from "../../../test/selectors";

const today = new Date(2021, 10, 25);
freezeBeforeAll(today);

beforeEach(() => render(<Example />));

test('should have "Domingo" as first day of week', () => {
  expect(
    getMonthGrid().firstChild?.firstChild?.firstChild
  ).toHaveAccessibleName("domingo");
});
