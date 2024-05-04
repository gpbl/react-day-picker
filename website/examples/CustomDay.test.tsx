import { renderApp, app } from "react-day-picker/test";

import { CustomDay } from "./CustomDay";

jest.useFakeTimers().setSystemTime(new Date(2021, 10, 25));

beforeEach(() => {
  renderApp(
    <div role="app">
      <CustomDay />
    </div>
  );
});

test("should render time elements", () => {
  const timeElements = app().getElementsByTagName("time");
  expect(timeElements).toHaveLength(35);
});
