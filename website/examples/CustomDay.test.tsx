import { renderApp, app, mockDate } from "@/test";

import { CustomDay } from "./CustomDay";

mockDate(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(
    <div role="app">
      <CustomDay />
    </div>
  );
});

test("should render time elements", () => {
  const timeElements = app().getElementsByTagName("time");
  expect(timeElements).toHaveLength(30);
});
