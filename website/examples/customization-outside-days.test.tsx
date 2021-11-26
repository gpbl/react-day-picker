import React from "react";

import { render } from "@testing-library/react";
import tk from "timekeeper";

import Example from "./customization-outside-days";

const today = new Date(2021, 10, 25);

beforeAll(() => tk.freeze(today));
afterAll(() => tk.reset());

beforeEach(() => {
  render(<Example />);
});

describe("when displaying November 2021", () => {
  const today = new Date(2021, 10, 25);
  beforeAll(() => tk.freeze(today));
  afterAll(() => tk.reset());
  test("should display the 31st October ", () => {
    const { container } = render(<Example />);
    const firstDayElement = container
      .getElementsByTagName("tr")[1]
      .getElementsByTagName("td")[0];
    expect(firstDayElement).toHaveAccessibleName(
      "31st October (Sunday)"
    );
  });
});
