import React from "react";
import { render, screen } from "@/test/render";
import { TestCase2833 } from "./TestCase2833";

test("test should run in Australia/Adelaide timezone", () => {
  expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
    "Australia/Adelaide",
  );
});

test("current date should be different than the date in Etc/GMT+12 timezone", () => {
  const today = new Date();
  const todayInTimezone = new Date(
    today.toLocaleString("en-US", { timeZone: "Etc/GMT+12" }),
  );
  expect(todayInTimezone.getDate()).not.toBe(today.getDate());
});

test("today's date should not be disabled", () => {
  const { container } = render(<TestCase2833 />);
  const day = container.querySelector('[data-day="2025-11-19"]');
  expect(screen.getByTestId("now")).toHaveTextContent(
    `Australian Central Daylight Time`,
  );
  expect(screen.getByTestId("timezone")).toHaveTextContent(`Etc/GMT+12`);
  expect(day).not.toHaveAttribute("data-disabled", "true");
});
