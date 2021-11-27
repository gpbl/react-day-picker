import React from "react";

import { fireEvent, render } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./customization-multiple-months-paged";
import {
  getMonthCaption,
  getPrevButton,
  getMonthTable,
} from "@site/src/test";

const today = new Date(2021, 10, 25);

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

let container: HTMLElement;

beforeEach(() => {
  const renderResult = render(<Example />);
  container = renderResult.container;
});

describe("when rendering November 2021", () => {
  test("should render 2 tables", () => {
    expect(getMonthTable(0)).toBeInTheDocument();
    expect(getMonthTable(1)).toBeInTheDocument();
  });

  test("the first month should be November", () => {
    expect(getMonthCaption(container)).toHaveTextContent(
      "November 2021"
    );
  });

  test("the first month should be December", () => {
    expect(getMonthCaption(container, 1)).toHaveTextContent(
      "December 2021"
    );
  });
  // Test pagination
  describe("when the previous month button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(getPrevButton());
    });
    test("the first month should be October", () => {
      expect(getMonthCaption(container)).toHaveTextContent(
        "September 2021"
      );
    });

    test("thegetMonthCaptionth should be November", () => {
      expect(getMonthCaption(container, 1)).toHaveTextContent(
        "October 2021"
      );
    });
  });
});
