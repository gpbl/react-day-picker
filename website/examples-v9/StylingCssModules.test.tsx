import { app, mockDate, renderApp } from "@/test";

import { StylingCssModules } from "./CssModules";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<StylingCssModules />);
});

test("should match the snapshot", () => {
  expect(app()).toMatchSnapshot();
});
