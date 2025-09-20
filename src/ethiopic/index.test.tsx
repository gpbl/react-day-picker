import { enUS } from "date-fns/locale/en-US";
import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { DayPicker } from "./index";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

describe("Ethiopic DayPicker", () => {
  test("renders Amharic month with Geez numerals by default", () => {
    render(<DayPicker />);
    // Caption label is also used as grid aria-label
    expect(grid("ታህሳስ ፳፻፲፯")).toBeInTheDocument();
  });

  test("renders English month with Latin digits and English weekdays when locale=enUS, numerals=latn", () => {
    render(<DayPicker locale={enUS as any} numerals="latn" />);
    expect(grid("Tahsas 2017")).toBeInTheDocument();
    // ARIA labels should contain English weekday names
    const fridayCells = screen.getAllByRole("gridcell", { name: /Friday,/ });
    expect(fridayCells.length).toBeGreaterThan(0);
  });

  test("dropdown caption shows year without day/month parts", () => {
    render(<DayPicker captionLayout="dropdown" month={new Date(2024, 8, 10)} />);

    const dropdowns = screen.getAllByRole("combobox");
    expect(dropdowns.length).toBeGreaterThan(1);

    const yearDropdown = dropdowns[1];
    const optionLabels = Array.from(yearDropdown.querySelectorAll("option")).map(
      (option) => option.textContent ?? "",
    );

    expect(optionLabels.length).toBeGreaterThan(0);
    for (const label of optionLabels) {
      expect(label.includes("/")).toBe(false);
    }

    const dropdownMonths = render(
      <DayPicker captionLayout="dropdown-months" month={new Date(2024, 8, 10)} />,
    );
    const yearText = Array.from(
      dropdownMonths.container.querySelectorAll("span"),
    )
      .map((el) => el.textContent ?? "")
      .find((text) => /[0-9፩-፼]/.test(text));

    expect(yearText).toBeDefined();
    expect(yearText?.includes("/")).toBe(false);
  });
});
