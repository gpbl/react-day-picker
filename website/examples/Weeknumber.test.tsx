import { act, mockDate, renderApp, screen, user } from "@/test";

import { Weeknumber } from "./Weeknumber";

const today = new Date(2021, 10, 25);
mockDate(today);

function getWeekButton(week: number) {
  return screen.getByRole("button", {
    name: `Week n. ${week}`
  });
}

function getTableFooter() {
  return screen.getByRole("grid").querySelector("tfoot");
}

beforeEach(() => renderApp(<Weeknumber />).container);

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    beforeEach(async () => act(() => user.click(getWeekButton(45))));
    test("should update the footer", () => {
      expect(getTableFooter()).toHaveTextContent("You clicked the week n. 45.");
    });
  });
});
