import { app, mockDate, gridcell, renderApp, user } from "../test-v8";

import { Single } from "./Single";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<Single />);
});

describe("when a day is clicked", () => {
  const day = new Date(2021, 10, 1);
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the day is clicked again", () => {
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test("should appear as not selected", () => {
      expect(gridcell(day)).not.toHaveAttribute("aria-selected");
    });
    test("should update the footer", () => {
      expect(app()).not.toHaveTextContent("You selected November 1st, 2021");
    });
  });
});
