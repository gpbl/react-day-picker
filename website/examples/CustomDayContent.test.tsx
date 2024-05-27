import { renderApp, screen, mockDate } from "@/test";

import { CustomDayContent } from "./CustomDay";

mockDate(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(
    <div role="app">
      <CustomDayContent />
    </div>
  );
});

test("should render time elements", () => {
  expect(screen.getByText("🎉")).toBeInTheDocument();
});
