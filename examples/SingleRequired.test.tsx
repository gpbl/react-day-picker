import React from "react";

import { gridcell } from "@/test/elements";
import { renderApp } from "@/test/renderApp";
import { user } from "@/test/user";

import { SingleRequired } from "./SingleRequired";

beforeEach(() => {
  renderApp(<SingleRequired />);
});

describe("when a day is clicked", () => {
  const day = new Date();
  beforeEach(async () => {
    await user.click(gridcell(day));
  });
  test("should appear as selected", () => {
    expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
  });
  describe("when the day is clicked again", () => {
    beforeEach(async () => {
      await user.click(gridcell(day));
    });
    test("should appear as selected", () => {
      expect(gridcell(day)).toHaveAttribute("aria-selected", "true");
    });
  });
});
