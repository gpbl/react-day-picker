import React from "react";
import { render, screen } from "@/test/render";
import { TestCase2833 } from "./TestCase2833";

test("test should run in Australia/Adelaide timezone", () => {
  expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe(
    "Australia/Adelaide",
  );
});

test('the "now" paragraph should show the correct timezone', () => {
  render(<TestCase2833 />);
  expect(screen.getByTestId("now")).toHaveTextContent(
    `Australian Central Daylight Time`,
  );
  expect(screen.getByTestId("timezone")).toHaveTextContent(`Etc/GMT+12`);
});

test("today's date should not be disabled", () => {
  const { container } = render(<TestCase2833 />);
  const day = container.querySelector('[data-day="2025-11-19"]');
  console.log(container.innerHTML);
  expect(day).not.toHaveAttribute("data-disabled", "true");
});
