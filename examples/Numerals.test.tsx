import { render } from "@testing-library/react";
import React from "react";

import { grid } from "@/test/elements";
import { setTestTime } from "@/test/setTestTime";
import { Numerals } from "./Numerals";

const today = new Date(2025, 10, 25);

setTestTime(today);
test("should use Devanagari numerals", () => {
  render(<Numerals />);

  expect(grid()).toHaveTextContent("२५");
});
