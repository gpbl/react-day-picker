import React from "react";
import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { Numerals } from "./Numerals";

const today = new Date(2025, 10, 25);

setTestTime(today);
test("should use Devanagari numerals", () => {
  render(<Numerals />);

  expect(grid()).toHaveTextContent("२५");
});
