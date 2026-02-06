import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { PersianEn } from "./PersianEn";

const today = new Date(2025, 2, 22);

setTestTime(today);
test("should render Farvardin 1404", () => {
  render(<PersianEn />);
  expect(grid("Farvardin 1404")).toBeInTheDocument();
});

test("should render 6 rows", () => {
  render(<PersianEn />);
  expect(screen.getAllByRole("row")).toHaveLength(6);
});

test("should render English short weekday labels", () => {
  render(<PersianEn />);
  expect(
    screen.getByRole("columnheader", { name: "Thursday", hidden: true }),
  ).toHaveTextContent("Th");
});
