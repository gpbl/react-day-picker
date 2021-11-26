import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./selecting-days-multiple";
import { getDayButton, getTableFooter } from "../src/test";

const today = new Date(2021, 10, 25); // 25th November

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe("when a day is clicked", () => {
  const selectedDay1 = new Date(2021, 10, 1);
  beforeEach(() => {
    fireEvent.click(getDayButton(selectedDay1));
  });
  test("should appear as selected", () => {
    expect(getDayButton(selectedDay1)).toHaveAttribute(
      "aria-pressed",
      "true"
    );
  });
  test("should update the footer", () => {
    expect(getTableFooter()).toHaveTextContent(
      "You selected 1 days."
    );
  });
  describe("when a second day is clicked", () => {
    const selectedDay2 = new Date(2021, 10, 2);
    beforeEach(() => {
      fireEvent.click(getDayButton(selectedDay2));
    });
    test("the first day should appear as selected", () => {
      expect(getDayButton(selectedDay1)).toHaveAttribute(
        "aria-pressed",
        "true"
      );
    });
    test("the second day should appear as selected", () => {
      expect(getDayButton(selectedDay2)).toHaveAttribute(
        "aria-pressed",
        "true"
      );
    });
    test("should update the footer", () => {
      expect(getTableFooter()).toHaveTextContent(
        "You selected 2 days."
      );
    });
  });
});
