import React from "react";

import { render } from "@/test/render";

import { Ethiopic } from "./Ethiopic.jsx";

const today = new Date(2021, 10, 25);

beforeAll(() => jest.setSystemTime(today));
afterAll(() => jest.useRealTimers());

beforeEach(() => {
  render(<Ethiopic />);
});

test.todo("should render the Ethiopic calendar");
