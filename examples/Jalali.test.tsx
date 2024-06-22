import React from "react";

import { render, screen } from "@/test/render";

import { Jalali } from "./Jalali";

const today = new Date(2021, 10, 25);

beforeAll(() => {
  jest.setSystemTime(today);
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  render(
    <div role="application">
      <Jalali />
    </div>
  );
});

test("should match the snapshot", () => {
  expect(screen.getByRole("application")).toMatchSnapshot();
});
