import React from "react";

import { fireEvent, render } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./customization-multiple-months-paged";
import { getGoToPreviousButton } from "@site/src/test";

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
    const tableElements = container.getElementsByTagName("table");
    expect(tableElements).toHaveLength(2);
  });

  test("the first month should be November", () => {
    const captions = container.getElementsByClassName(
      "rdp-caption_label"
    );
    expect(captions[0]).toHaveTextContent("November 2021");
  });

  test("the first month should be December", () => {
    const captions = container.getElementsByClassName(
      "rdp-caption_label"
    );
    expect(captions[1]).toHaveTextContent("December 2021");
  });
  // Test pagination
  describe("when the previous month button is clicked", () => {
    beforeEach(() => {
      fireEvent.click(getGoToPreviousButton());
    });
    test("the first month should be October", () => {
      const captions = container.getElementsByClassName(
        "rdp-caption_label"
      );
      expect(captions[0]).toHaveTextContent("September 2021");
    });

    test("the first month should be November", () => {
      const captions = container.getElementsByClassName(
        "rdp-caption_label"
      );
      expect(captions[1]).toHaveTextContent("October 2021");
    });
  });
});
