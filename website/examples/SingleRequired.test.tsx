import { mockDate, gridcell, renderApp, user } from "../test-v8";

import { SingleRequired } from "./SingleRequired";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<SingleRequired />);
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
    test("should appear as selected", () => {
      expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
    });
  });
});
