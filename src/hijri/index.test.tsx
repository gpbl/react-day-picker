import React from "react";
import { grid, nextButton, previousButton } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { enUS } from "../locale/en-US.js";
import { DayPicker } from "./index";

const today = new Date(2025, 2, 8); // 8 Ramadan 1446
const gregorianMinDate = new Date(1924, 7, 1);
const gregorianMaxDate = new Date(2077, 10, 16);

setTestTime(today);
describe("Hijri DayPicker", () => {
  test("renders Hijri month caption by default", () => {
    // Default locale is ar-SA, numerals arab
    // Ramadan 1446 -> رمضان ١٤٤٦
    render(<DayPicker />);
    expect(grid("رمضان ١٤٤٦")).toBeInTheDocument();
  });

  test("renders English month names when locale=enUS", () => {
    render(<DayPicker locale={enUS} dir="ltr" numerals="latn" />);
    // "Ramadan 1446"
    expect(grid("Ramadan 1446")).toBeInTheDocument();

    // Check if gridcells have Latin numbers
    // 8 -> "8"
    const cell = screen.getByText("8");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute("role", "gridcell");
  });

  test("renders Latin digits with Arabic locale when numerals=latn", () => {
    render(<DayPicker numerals="latn" />);
    expect(grid("رمضان 1446")).toBeInTheDocument();

    const cell = screen.getByText("8");
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute("role", "gridcell");
  });

  test("clamps an out-of-range month before the minimum and disables previous navigation", () => {
    expect(() =>
      render(
        <DayPicker
          month={new Date(1900, 0, 1)}
          locale={enUS}
          dir="ltr"
          numerals="latn"
        />,
      ),
    ).not.toThrow();

    expect(previousButton()).toHaveAttribute("aria-disabled", "true");
  });

  test("clamps an out-of-range month after the maximum and disables next navigation", () => {
    expect(() =>
      render(
        <DayPicker
          month={new Date(2100, 0, 1)}
          locale={enUS}
          dir="ltr"
          numerals="latn"
        />,
      ),
    ).not.toThrow();

    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
  });

  test("bounds navigation by default at the minimum converter month", () => {
    render(
      <DayPicker
        month={gregorianMinDate}
        locale={enUS}
        dir="ltr"
        numerals="latn"
      />,
    );

    expect(previousButton()).toHaveAttribute("aria-disabled", "true");
  });

  test("bounds navigation by default at the maximum converter month", () => {
    render(
      <DayPicker
        month={gregorianMaxDate}
        locale={enUS}
        dir="ltr"
        numerals="latn"
      />,
    );

    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
  });

  test("clamps deprecated fromMonth below range", () => {
    render(
      <DayPicker
        month={gregorianMinDate}
        fromMonth={new Date(1900, 0, 1)}
        locale={enUS}
        dir="ltr"
        numerals="latn"
      />,
    );

    expect(previousButton()).toHaveAttribute("aria-disabled", "true");
  });

  test("clamps deprecated toMonth above range", () => {
    render(
      <DayPicker
        month={gregorianMaxDate}
        toMonth={new Date(2100, 0, 1)}
        locale={enUS}
        dir="ltr"
        numerals="latn"
      />,
    );

    expect(nextButton()).toHaveAttribute("aria-disabled", "true");
  });
});
