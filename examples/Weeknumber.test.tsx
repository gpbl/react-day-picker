import React from "react";

import { render, screen } from "@/test/render";

import { Weeknumber } from "./Weeknumber";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

function getWeek(week: number) {
  return screen.getByRole("rowheader", {
    name: (name, el) =>
      name === `Week number` && el.textContent === week.toString(),
    hidden: true
  });
}

beforeEach(() => render(<Weeknumber />).container);

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(getWeek(45)).toBeInTheDocument();
  });
});
