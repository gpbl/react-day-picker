import { app, renderApp } from "@/test";

import { Formatters } from "./Formatters";

const today = new Date(2021, 10, 25);
jest.useFakeTimers().setSystemTime(today);

test("should display the autumn emoji", () => {
  renderApp(<Formatters />);
  expect(app()).toHaveTextContent("🍂");
});
