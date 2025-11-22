import { addDays } from "date-fns";
import React from "react";

import { app, dateButton, gridcell } from "@/test/elements";
import { renderApp } from "@/test/renderApp";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { ModifiersToday } from "./ModifiersToday";

const today = new Date(2022, 5, 10);

setTestTime(today);
beforeEach(() => {
  renderApp(<ModifiersToday />);
});

describe("when rendering a month that contains today", () => {
  test("it should add the default class name for today", () => {
    expect(gridcell(today, true)).toHaveClass("rdp-today");
  });
  test('it should have exactly one ".day_today" class', () => {
    const todays = app().querySelectorAll(".rdp-today");
    expect(todays).toHaveLength(1);
  });
});

describe("when the today date is clicked", () => {
  beforeEach(async () => {
    await user.click(dateButton(today));
  });
  test("should update the footer", () => {
    expect(app()).toHaveTextContent("You clicked the today’s date");
  });
});

describe("when another date is clicked", () => {
  const date = addDays(today, 1);
  beforeEach(async () => user.click(dateButton(date)));
  test("should update the footer", () => {
    expect(app()).toHaveTextContent("This is not the today’s date.");
  });
});
