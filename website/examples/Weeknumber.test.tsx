import { app, rowheader, renderApp, user } from "react-day-picker/test";

import { Weeknumber } from "./WeekNumber";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

beforeEach(() => {
  renderApp(<Weeknumber />);
});

describe("when displaying November 2021", () => {
  test("should display the 45th week number", () => {
    expect(rowheader("Week 45")).toBeInTheDocument();
  });
  describe("when the week button is clicked", () => {
    beforeEach(async () => {
      await user.click(rowheader("Week 45"));
    });
    test("should update the footer", () => {
      expect(app()).toHaveTextContent("You clicked the week n. 45.");
    });
  });
});
