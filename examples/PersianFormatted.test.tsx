import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { PersianFormatted } from "./PersianFormatted";

const today = new Date(2024, 11, 22);

setTestTime(today);
test("should render دی 1403", () => {
  render(<PersianFormatted />);
  expect(grid("دی ۱۴۰۳")).toBeInTheDocument();
});
