import React from "react";

import { app } from "@/test/elements";
import { act, render, screen } from "@/test/render";
import { user } from "@/test/user";

import { Weeknumber } from "./Weeknumber";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

function getWeekButton(week: number) {
  return screen.getByRole("rowheader", {
    name: `Week ${week}`
  });
}

beforeEach(() => render(<Weeknumber />).container);

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    beforeEach(async () => act(() => user.click(getWeekButton(45))));
    test("should update the footer", () => {
      expect(
        screen.getByText("You clicked the week n. 45.")
      ).toBeInTheDocument();
    });
  });
});
