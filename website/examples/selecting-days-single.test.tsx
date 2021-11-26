import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./selecting-days-single";
import { getDayButton, getTableFooter } from "../src/test";

const today = new Date(2021, 10, 25);

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe("when a day is clicked", () => {
  const selectedDay = new Date(2021, 10, 1);
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
      "You selected November 1st, 2021."
    );
  });
  describe("when the day is clicked again", () => {
    beforeEach(() => {
      fireEvent.click(getDayButton(selectedDay));
    });
    test("should appear as not selected", () => {
      expect(getDayButton(selectedDay)).not.toHaveAttribute(
        "aria-pressed"
      );
    });
  });
});
