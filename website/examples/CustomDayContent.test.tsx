import { renderApp, screen, mockDate } from "@/test";

import { CustomDay } from "./CustomDay";

mockDate(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(
    <div role="app">
      <CustomDay />
    </div>
  );
});

test("should render the emoji", () => {
  expect(screen.getByText("🎉19")).toBeInTheDocument();
});
