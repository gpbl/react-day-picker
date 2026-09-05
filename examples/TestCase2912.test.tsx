import React from "react";

import { grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { user } from "@/test/user";

import { TestCase2912 } from "./TestCase2912";

describe("when startMonth moves after the displayed month", () => {
  test("should display the new start month as the first month", async () => {
    render(<TestCase2912 />);
    await user.click(
      screen.getByRole("button", { name: "Update start month" }),
    );
    const grids = screen.getAllByRole("grid");
    expect(grids[0]).toHaveAccessibleName("July 2028");
    expect(grids[1]).toHaveAccessibleName("August 2028");
    expect(grid("July 2028")).toBeInTheDocument();
  });
});

describe("when endMonth moves before the displayed month", () => {
  test("should display the first month {{numberOfMonths}} months before the new end month", async () => {
    render(<TestCase2912 />);
    await user.click(screen.getByRole("button", { name: "Update end month" }));
    const grids = screen.getAllByRole("grid");
    expect(grids[0]).toHaveAccessibleName("June 2024");
    expect(grids[1]).toHaveAccessibleName("July 2024");
  });
});
