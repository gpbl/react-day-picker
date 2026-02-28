import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { HijriEn } from "./HijriEn";

const today = new Date(2025, 2, 8);

setTestTime(today);
test("renders Ramadan 1446 with English locale and Latin digits", () => {
  render(<HijriEn />);
  expect(grid("Ramadan 1446")).toBeInTheDocument();
  expect(screen.getByText("8")).toBeInTheDocument();
});
