import { within } from "@testing-library/react";
import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { Hebrew } from "./Hebrew";

const today = new Date(2024, 9, 3);

setTestTime(today);

describe("Hebrew example", () => {
  beforeEach(() => {
    render(<Hebrew />);
  });

  test("renders Hebrew caption with Hebrew locale defaults", () => {
    expect(grid("תשרי 5785")).toBeInTheDocument();
  });

  test("renders every day in Tishri 5785", () => {
    const days = within(grid("תשרי 5785"))
      .getAllByRole("gridcell")
      .map((cell) => cell.textContent?.trim())
      .filter(Boolean);

    const missingDays = Array.from({ length: 30 }, (_, index) =>
      (index + 1).toString(),
    ).filter((day) => !days.includes(day));

    expect(missingDays).toHaveLength(0);
  });
});
