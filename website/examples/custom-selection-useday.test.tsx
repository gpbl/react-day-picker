import React from "react";

import { getDayButton } from "@site/src/test";
import { fireEvent, render } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./custom-selection-useday";

describe("when today is the 25th of november 2021", () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());

  beforeEach(() => {
    render(<Example />);
  });

  describe("when clicking on the 11th", () => {
    const clickedDate1 = new Date(2021, 10, 11);
    beforeEach(() => {
      fireEvent.click(getDayButton(clickedDate1));
    });
    test("the 11th day should be selected", () => {
      expect(getDayButton(clickedDate1)).toHaveAttribute(
        "aria-pressed",
        "true"
      );
    });
    describe("when clicking on the 13th", () => {
      const clickedDate2 = new Date(2021, 10, 13);
      beforeEach(() => {
        fireEvent.click(getDayButton(clickedDate2));
      });
      test("the 11th day should stay selected", () => {
        expect(getDayButton(clickedDate1)).toHaveAttribute(
          "aria-pressed",
          "true"
        );
      });
      test("the 13th day not should be selected", () => {
        expect(getDayButton(clickedDate2)).not.toHaveAttribute(
          "aria-pressed"
        );
      });
    });
    describe("when pressing the Shift key", () => {
      const clickedDate2 = new Date(2021, 10, 13);
      beforeEach(() => {
        fireEvent.click(getDayButton(clickedDate2), {
          shiftKey: true,
        });
      });
      test("the 13th day should be selected", () => {
        expect(getDayButton(clickedDate2)).toHaveAttribute(
          "aria-pressed",
          "true"
        );
      });
    });
  });
});
