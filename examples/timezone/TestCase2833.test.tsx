import React from "react";
import { render, screen } from "@/test/render";
import { TestCase2833 } from "./TestCase2833";

test("test should run in Australia/Sydney timezone", () => {
  expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
    "Australia/Sydney",
  );
});

test('the "now" paragraph should show the correct timezone', () => {
  render(<TestCase2833 />);
  expect(screen.getByTestId("now")).toHaveTextContent(
    `Australian Eastern Daylight Time`,
  );
  expect(screen.getByTestId("timezone")).toHaveTextContent(`Pacific/Honolulu`);
});

test("today's date should not be disabled", () => {
  const { container } = render(<TestCase2833 />);
  const day = container.querySelector('[data-day="2025-11-19"]');
  expect(day).not.toHaveAttribute("data-disabled", "true");
});
