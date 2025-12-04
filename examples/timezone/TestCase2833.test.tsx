import React from "react";

import { render, screen } from "@/test/render";
import { TestCase2833 } from "./TestCase2833";

test("test should run in Australia/Adelaide timezone", () => {
  expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
    "Australia/Adelaide",
  );
});

test("current date should be different than the date in Pacific/Honolulu timezone", () => {
  // This test ensures that the test is running in a timezone with a shifted date
  const timeZone = "Pacific/Honolulu";
  const instant = new Date(Date.UTC(2024, 0, 1, 0, 0, 0));
  const localDay = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Adelaide",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(instant);
  const dayInTimezone = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(instant);
  expect(dayInTimezone).not.toBe(localDay);
});

test("today's date should not be disabled", () => {
  const timeZone = "Pacific/Honolulu";
  const today = new Date().toISOString().slice(0, 10); // yyyy-MM-dd in current zone
  const { container } = render(<TestCase2833 />);
  const day = container.querySelector(`[data-day="${today}"]`);
  expect(screen.getByTestId("now")).toHaveTextContent(
    `Australian Central Daylight Time`,
  );
  expect(screen.getByTestId("timezone")).toHaveTextContent(timeZone);
  expect(day).not.toHaveAttribute("data-disabled", "true");
});
