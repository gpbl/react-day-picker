import { columnheader, renderApp } from "react-day-picker/test";

import { SpanishWeekStartsOn } from "./SpanishWeekStartsOn";

test('should have "domingo" as first day of week', () => {
  renderApp(<SpanishWeekStartsOn />);
  expect(columnheader("domingo")).toBeInTheDocument();
});
