import React from "react";
import { render, screen } from "@/test/render";
import { DayPicker } from "./DayPicker.js";

// Exercise the fallback used by supported React versions without useId.
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useId: undefined,
}));

describe("caption association without React.useId", () => {
  let rerender: ReturnType<typeof render>["rerender"];
  let captionIds: (string | null)[];
  const calendars = () => (
    <>
      <DayPicker
        mode="single"
        dayInteraction="cell"
        month={new Date(2026, 8)}
      />
      <DayPicker
        mode="single"
        dayInteraction="cell"
        month={new Date(2026, 9)}
      />
    </>
  );
  beforeEach(() => {
    ({ rerender } = render(calendars()));
    captionIds = screen
      .getAllByRole("grid")
      .map((grid) => grid.getAttribute("aria-labelledby"));
  });
  test("creates distinct caption associations", () => {
    expect(new Set(captionIds).size).toBe(2);
  });
  test("names the first grid through its caption", () => {
    expect(screen.getAllByRole("grid")[0]).toHaveAccessibleName(
      "September 2026",
    );
  });
  describe("after rerendering", () => {
    beforeEach(() => {
      rerender(calendars());
    });
    test("keeps caption references stable", () => {
      expect(
        screen
          .getAllByRole("grid")
          .map((grid) => grid.getAttribute("aria-labelledby")),
      ).toEqual(captionIds);
    });
  });
});
