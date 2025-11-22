import React from "react";

import { app } from "@/test/elements";
import { renderApp } from "@/test/renderApp";
import { setTestTime } from "@/test/setTestTime";
import { CssModules } from "./CssModules";

const today = new Date(2021, 10, 25);

setTestTime(today);
beforeEach(() => {
  renderApp(<CssModules />);
});

test("should match the snapshot", () => {
  expect(app()).toMatchSnapshot();
});
