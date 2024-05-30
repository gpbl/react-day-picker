import React from "react";

import { columnheader } from "@/test/elements";
import { render } from "@/test/render";

import { SpanishWeekStartsOn } from "./SpanishWeekStartsOn";

test('should have "domingo" as first day of week', () => {
  render(<SpanishWeekStartsOn />);
  expect(columnheader("domingo")).toBeInTheDocument();
});
