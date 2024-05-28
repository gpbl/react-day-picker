import { app, mockDate, renderApp } from "../test-v8";

import { StylingCssModules } from "./StylingCssModules";

const today = new Date(2021, 10, 25);
mockDate(today);

beforeEach(() => {
  renderApp(<StylingCssModules />);
});

test("should match the snapshot", () => {
  expect(app()).toMatchSnapshot();
});
