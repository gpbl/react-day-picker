import React from "react";

import { gridcell } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { OutsideDays } from "./OutsideDays";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  render(<OutsideDays />);
});

describe("when displaying a month with outside days", () => {
  test("should display the outside day", () => {
    expect(gridcell(new Date(2021, 9, 31))).toBeInTheDocument();
  });
});
