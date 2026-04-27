import React from "react";
import { grid } from "@/test/elements";
import { render, screen, within } from "@/test/render";
import { DayPicker, enUS, faIR, getDateLib } from "./index";

describe("Persian DayPicker", () => {
  test("renders Persian month caption and RTL direction by default", () => {
    const { container } = render(<DayPicker month={new Date(2024, 11, 1)} />);

    expect(grid("آذر ۱۴۰۳")).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute("dir", "rtl");
  });

  test("renders English month caption with Latin digits when requested", () => {
    const { container } = render(
      <DayPicker
        dir="ltr"
        locale={enUS}
        month={new Date(2024, 11, 1)}
        numerals="latn"
      />,
    );

    expect(grid("Azar 1403")).toBeInTheDocument();
    expect(container.firstElementChild).toHaveAttribute("dir", "ltr");
  });

  test("applies dateLib overrides after Persian defaults", () => {
    render(
      <DayPicker
        month={new Date(2024, 11, 1)}
        dateLib={{ format: () => "custom caption" }}
      />,
    );

    expect(grid("custom caption")).toBeInTheDocument();
  });

  test("getDateLib formats Jalali dates with configured numerals", () => {
    const dateLib = getDateLib({ locale: faIR, numerals: "arabext" });

    expect(dateLib.format(new Date(2024, 11, 1), "yyyy-MM-dd")).toBe(
      "۱۴۰۳-۰۹-۱۱",
    );
  });

  test("getDateLib applies consumer overrides after Jalali defaults", () => {
    const dateLib = getDateLib({
      locale: enUS,
      numerals: "latn",
      overrides: {
        format: () => "custom format",
      },
    });

    expect(dateLib.format(new Date(2024, 11, 1), "yyyy-MM-dd")).toBe(
      "custom format",
    );
  });

  test("noonSafe keeps full weeks in historical time zones", () => {
    render(
      <DayPicker
        defaultMonth={new Date(1900, 11, 1)}
        fixedWeeks
        noonSafe
        showOutsideDays
        timeZone="Asia/Dubai"
      />,
    );

    const rows = within(screen.getByRole("grid")).getAllByRole("row");
    const dayRows = rows.filter(
      (row) => within(row).queryAllByRole("gridcell").length > 0,
    );

    expect(within(dayRows[0]).getAllByRole("gridcell")).toHaveLength(7);
    expect(
      within(dayRows[dayRows.length - 1]).getAllByRole("gridcell"),
    ).toHaveLength(7);
  });
});
