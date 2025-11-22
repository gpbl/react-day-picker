import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { HebrewEn } from "./HebrewEn";

const today = new Date(2024, 9, 3);

setTestTime(today);
test("renders English caption when using en-US locale", () => {
  render(<HebrewEn />);
  expect(grid("Tishri 5785")).toBeInTheDocument();
});
