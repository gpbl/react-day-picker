import { mockDate, gridcell, renderApp, user, act } from "../test-v8";

import { CustomWeek } from "./CustomWeek";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<CustomWeek />);
});

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await act(() => user.click(gridcell(today)));
  });
  test("the whole week should appear selected", () => {
    const week = [
      gridcell(new Date(2021, 10, 21)),
      gridcell(new Date(2021, 10, 22)),
      gridcell(new Date(2021, 10, 23)),
      gridcell(new Date(2021, 10, 24)),
      gridcell(new Date(2021, 10, 25)),
      gridcell(new Date(2021, 10, 26)),
      gridcell(new Date(2021, 10, 27))
    ];
    week.forEach((day) => {
      expect(day).toHaveAttribute("aria-selected", "true");
    });
  });
  describe("when clicking the day again", () => {
    beforeEach(async () => {
      await act(() => user.click(gridcell(today)));
    });
    test("the whole week should not be selected", () => {
      const week = [
        gridcell(new Date(2021, 10, 21)),
        gridcell(new Date(2021, 10, 22)),
        gridcell(new Date(2021, 10, 23)),
        gridcell(new Date(2021, 10, 24)),
        gridcell(new Date(2021, 10, 25)),
        gridcell(new Date(2021, 10, 26)),
        gridcell(new Date(2021, 10, 27))
      ];
      week.forEach((day) => {
        expect(day).not.toHaveAttribute("aria-selected", "true");
      });
    });
  });
});
