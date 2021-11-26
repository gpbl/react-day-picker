import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./custom-selection-multiple";
import { getDayButton, getTableFooter } from "../src/test";

const today = new Date(2021, 10, 25); // 25th November

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe("when a day is selected", () => {
  const selectedDay = new Date(2021, 10, 1); // 1st November
  beforeEach(() => {
    fireEvent.click(getDayButton(selectedDay));
  });
  test("should appear as selected", () => {
    expect(getDayButton(selectedDay)).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });
  test("should update the footer", () => {
    expect(getTableFooter()).toHaveTextContent(
      "You selected 11/1/2021."
    );
  });
});
