import { act, app, mockDate, renderApp, screen, user } from "@/test";

import { Weeknumber } from "./Weeknumber";

const today = new Date(2021, 10, 25);
mockDate(today);

function getWeekButton(week: number) {
  return screen.getByRole("rowheader", {
    name: `Week ${week}`
  });
}

beforeEach(() => renderApp(<Weeknumber />).container);

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(getWeekButton(45)).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    beforeEach(async () => act(() => user.click(getWeekButton(45))));
    test("should update the footer", () => {
      expect(app()).toHaveTextContent("You clicked the week n. 45.");
    });
  });
});
