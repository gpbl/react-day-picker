import React from "react";

import { app } from "@/test/elements";
import { renderApp } from "@/test/renderApp";

import { CssModules } from "./CssModules";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  renderApp(<CssModules />);
});

test("should match the snapshot", () => {
  expect(app()).toMatchSnapshot();
});
