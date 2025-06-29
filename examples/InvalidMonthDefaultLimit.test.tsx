import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { InvalidMonthDefaultLimit } from "./InvalidMonthDefaultLimit";

test("should display calendar in December", () => {
  render(<InvalidMonthDefaultLimit />);
  expect(grid()).toHaveAccessibleName(`December ${new Date().getFullYear()}`);
});
