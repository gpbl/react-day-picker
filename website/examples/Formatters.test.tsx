import { app, mockDate, renderApp } from "@/test";

import { Formatters } from "./Formatters";

const today = new Date(2021, 10, 25);
mockDate(today);

test("should display the autumn emoji", () => {
  renderApp(<Formatters />);
  expect(app()).toHaveTextContent("🍂");
});
