import React from "react";

import { app, grid } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { Disabled } from "./Disabled";

const today = new Date(2022, 5, 10);

setTestTime(today);
beforeEach(() => {
  render(
    <div role="application">
      <Disabled />
    </div>,
  );
  // return act(() => dateButton(firstOfMonth).focus());
});

test("should not display the previous button", () => {
  expect(
    screen.queryByRole("button", { name: "Previous month" }),
  ).not.toBeInTheDocument();
});

describe("when the first day is focused", () => {
  describe("when the Arrow Left is pressed", () => {
    beforeEach(async () => {
      await user.type(app(), "{arrowleft}");
    });
    test("should still display the same month", () => {
      expect(grid("June 2022")).toBeInTheDocument();
    });
  });
});
describe("when the last day is focused", () => {
  describe("when the Arrow Right is pressed", () => {
    beforeEach(async () => {
      await user.type(app(), "{arrowleft}");
    });
    test("should still display the same month", () => {
      expect(grid("June 2022")).toBeInTheDocument();
    });
  });
});
