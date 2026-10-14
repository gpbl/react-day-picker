import React from "react";
import { render, screen } from "@/test/render";
import { DayPicker, getDateLib, psAFEn, psAFEnJalali } from "../index.js";

test("formats and parses romanized Afghan Pashto Jalali months", () => {
  expect(psAFEn).toBe(psAFEnJalali);
  expect(psAFEn.localize.month(0)).toBe("Wray");
  expect(psAFEn.localize.month(6)).toBe("Tala");
  expect(psAFEn.localize.month(11)).toBe("Kab");
  expect(psAFEn.match.month("tala 1405")?.value).toBe(6);
  expect(psAFEn.options?.weekStartsOn).toBe(6);

  const dateLib = getDateLib({ locale: psAFEn, numerals: "latn" });
  expect(dateLib.format(new Date(2026, 9, 14), "LLLL yyyy")).toBe("Tala 1405");
});

test("renders English weekdays, romanized Pashto caption, and Latin digits", () => {
  const { container } = render(
    <DayPicker
      locale={psAFEn}
      month={new Date(2026, 9, 14)}
      numerals="latn"
      showWeekNumber
      showOutsideDays
    />,
  );

  expect(container.firstElementChild).toHaveAttribute("dir", "rtl");
  expect(screen.getByRole("grid", { name: "Tala 1405" })).toBeInTheDocument();
  expect(screen.getByText("Sa")).toBeInTheDocument();
  expect(
    screen.getAllByRole("gridcell", { name: /^Saturday/ }).length,
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole("button", { name: "Go to the Next Month" }),
  ).toBeInTheDocument();
});
