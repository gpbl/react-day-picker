import { app, mockDate, gridcell, renderApp, user, act } from "../test-v8";

import { CustomSingle } from "./CustomSingle";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<CustomSingle />);
});

describe("when a day is clicked", () => {
  beforeEach(async () => {
    await act(() => user.click(gridcell(today)));
  });
  test("should appear as selected", () => {
    expect(gridcell(today)).toHaveAttribute("aria-selected", "true");
  });
  test("should update the footer", () => {
    expect(app()).toHaveTextContent("You selected Thu Nov 25 2021");
  });
  describe("when clicking the day again", () => {
    beforeEach(async () => {
      await act(() => user.click(gridcell(today)));
    });
    test("should not appear as selected", () => {
      expect(gridcell(today)).not.toHaveAttribute("aria-selected", "true");
    });
    test("should update the footer", () => {
      expect(app()).not.toHaveTextContent("You selected Thu Nov 25 2021");
    });
  });
});
