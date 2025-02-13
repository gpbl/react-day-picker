import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { InvalidMonth } from "./InvalidMonth";

test("should display calendar in a valid month when month prop is invalid", () => {
  render(<InvalidMonth />);
  expect(grid()).toHaveAccessibleName(`July 2024`);
});
