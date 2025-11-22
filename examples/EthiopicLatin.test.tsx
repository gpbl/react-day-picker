import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { EthiopicLatin } from "./EthiopicLatin";

const today = new Date(2024, 11, 22);

setTestTime(today);
test("should render Tahsas 2017 with latin numerals", () => {
  render(<EthiopicLatin />);
  expect(grid("Tahsas 2017")).toBeInTheDocument();
});
