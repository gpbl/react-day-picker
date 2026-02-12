import React from "react";
import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { enUS } from "../locale/en-US.js";
import { DayPicker } from "./index";

const today = new Date(2025, 2, 8); // 8 Ramadan 1446

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
});
