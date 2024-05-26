import { gridcell, renderApp, user } from "@/test";

import { SingleRequired } from "./SingleRequired";

beforeEach(() => {
  renderApp(<SingleRequired />);
});

describe("when a day is clicked", () => {
  const day = new Date();
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
