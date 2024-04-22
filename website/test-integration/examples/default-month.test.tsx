import React from "react";

import Example from "@examples/default-month";
import { freezeBeforeAll } from "@site/test/utils";
import { render } from "@testing-library/react";

import { getMonthCaption } from "../../../test/selectors";

const today = new Date(2022, 5, 10);
freezeBeforeAll(today);

beforeEach(() => {
  render(<Example />);
});

test("should display September 1979", () => {
  expect(getMonthCaption()).toHaveTextContent("September 1979");
});
