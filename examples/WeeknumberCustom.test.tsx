import React from "react";

import { render, screen } from "@/test/render";

import { WeeknumberCustom } from "./WeeknumberCustom";

beforeEach(() => {
  render(<WeeknumberCustom />);
});

test("should display the 1st week (even if December)", () => {
  expect(
    screen.getByRole("rowheader", {
      name: (name, el) => name === "W1"
    })
  ).toBeInTheDocument();
});
