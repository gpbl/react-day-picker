import { app, rowheader, renderApp, user, mockDate } from "@/test";

import { Weeknumber } from "./WeekNumber";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<Weeknumber />);
});

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(rowheader("Week 45")).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    test("should update the footer", async () => {
      await user.click(rowheader("Week 45"));
      expect(app()).toHaveTextContent("You clicked the week n. 45.");
    });
  });
});
