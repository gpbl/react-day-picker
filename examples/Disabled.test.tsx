import React from "react";

import { app, grid, gridcell } from "@/test/elements";
import { act, render, screen } from "@/test/render";
import { user } from "@/test/user";

import { Disabled } from "./Disabled";

const today = new Date(2022, 5, 10);
const firstOfMonth = new Date(2022, 5, 1);
jest.useFakeTimers().setSystemTime(today);

beforeEach(async () => {
  render(
    <div role="application">
      <Disabled />
    </div>
  );
  return act(() => gridcell(firstOfMonth).focus());
});

test("should not display the previous button", () => {
  expect(
    screen.queryByRole("button", { name: "Previous month" })
  ).not.toBeInTheDocument();
});

describe("when the first day is focused", () => {
  describe("when the Arrow Left is pressed", () => {
    beforeEach(async () => {
      await act(() => user.type(app(), "{arrowleft}"));
    });
    test("should still display the same month", () => {
      expect(grid("June 2022")).toBeInTheDocument();
    });
  });
});
describe("when the last day is focused", () => {
  describe("when the Arrow Right is pressed", () => {
    beforeEach(async () => {
      await act(() => user.type(app(), "{arrowleft}"));
    });
    test("should still display the same month", () => {
      expect(grid("June 2022")).toBeInTheDocument();
    });
  });
});
