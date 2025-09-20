import React from "react";

import { grid } from "@/test/elements";
import { render } from "@/test/render";

import { Ethiopic } from "./Ethiopic.jsx";

const today = new Date(2024, 11, 22);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

test("should render ታህሳስ ፳፻፲፯", () => {
  render(<Ethiopic />);
  expect(grid("ታህሳስ ፳፻፲፯")).toBeInTheDocument();
});

test("dropdown layout renders without crashing", () => {
  render(<Ethiopic captionLayout="dropdown" />);
  expect(grid()).toBeInTheDocument();
});
