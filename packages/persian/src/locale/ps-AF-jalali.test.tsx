import React from "react";
import { render, screen, within } from "@/test/render";
import { DayPicker, faIR, getDateLib, psAF, psAFJalali } from "../index.js";

const months = [
  "وری",
  "غویی",
  "غبرګولی",
  "چنګاښ",
  "زمری",
  "وږی",
  "تله",
  "لړم",
  "لیندۍ",
  "مرغومی",
  "سلواغه",
  "کب",
];

test("exports Afghan Pashto Jalali localization without changing Farsi", () => {
  expect(psAF).toBe(psAFJalali);
  expect(psAF.localize.month(0)).toBe("وری");
  expect(psAF.localize.month(11)).toBe("کب");
  expect(faIR.localize.month(0)).toBe("فروردین");
  expect(psAF.match.month("غبرګولی پاتې")?.value).toBe(2);
  expect(psAF.localize.month(2, { width: "abbreviated" })).toBe("غبرګولی");
  expect(psAF.localize.month(2, { width: "narrow" })).toBe("غ");
  expect(psAF.match.month("غ پاتې", { width: "narrow" })?.value).toBe(1);
  expect(psAF.options?.weekStartsOn).toBe(6);
});

test("formats Jalali transitions, leap day, weekdays, and numeral systems", () => {
  const latin = getDateLib({ locale: psAF, numerals: "latn" });
  const eastern = getDateLib({ locale: psAF, numerals: "arabext" });
  expect(latin.format(new Date(2026, 2, 21), "yyyy MMMM d")).toBe("1405 وری 1");
  expect(eastern.format(new Date(2026, 2, 21), "yyyy MMMM d")).toBe(
    "۱۴۰۵ وری ۱",
  );
  expect(latin.format(new Date(2025, 2, 20), "yyyy MMMM d")).toBe("1403 کب 30");
  expect(latin.format(new Date(2025, 2, 21), "yyyy MMMM d")).toBe("1404 وری 1");
  expect(latin.format(new Date(2026, 2, 21), "PPPP")).toContain("شنبه");
});

test("renders RTL Jalali dropdowns, week order, and Pashto labels", () => {
  const { container } = render(
    <DayPicker
      locale={psAF}
      month={new Date(2026, 2, 21)}
      captionLayout="dropdown"
      startMonth={new Date(2026, 2, 21)}
      endMonth={new Date(2027, 2, 20)}
    />,
  );
  expect(container.firstElementChild).toHaveAttribute("dir", "rtl");
  expect(screen.getByRole("grid", { name: "وری ۱۴۰۵" })).toBeInTheDocument();
  const month = screen.getByRole("combobox", { name: "میاشت وټاکئ" });
  expect(
    within(month)
      .getAllByRole("option")
      .map((option) => option.textContent),
  ).toEqual(months);
  expect(
    screen.getByRole("combobox", { name: "کال وټاکئ" }),
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("gridcell", { name: /^شنبه/ })[0],
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "راتلونکې میاشت ته لاړ شئ" }),
  ).toBeInTheDocument();
  const dayLabel = psAF.labels?.labelDayButton;
  expect(typeof dayLabel).toBe("function");
  if (typeof dayLabel === "function") {
    expect(
      dayLabel(new Date(2026, 2, 21), { today: true, selected: true }),
    ).toContain("وری 1، ټاکل شوې");
  }
});
