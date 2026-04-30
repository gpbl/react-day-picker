import React from "react";
import { grid, monthDropdown, yearDropdown } from "@/test/elements";
import { render, screen } from "@/test/render";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { CustomDropdown } from "./CustomDropdown";

const originalPointerEvent = window.PointerEvent;
const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
const originalHasPointerCapture =
  window.HTMLElement.prototype.hasPointerCapture;
const originalReleasePointerCapture =
  window.HTMLElement.prototype.releasePointerCapture;

const today = new Date(2015, 6, 1);

setTestTime(today);

beforeAll(() => {
  window.PointerEvent =
    class PointerEvent extends Event {} as unknown as typeof window.PointerEvent;
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  window.HTMLElement.prototype.hasPointerCapture = jest.fn();
  window.HTMLElement.prototype.releasePointerCapture = jest.fn();
});

afterAll(() => {
  window.PointerEvent = originalPointerEvent;
  window.HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  window.HTMLElement.prototype.hasPointerCapture = originalHasPointerCapture;
  window.HTMLElement.prototype.releasePointerCapture =
    originalReleasePointerCapture;
});

beforeEach(() => {
  render(<CustomDropdown />);
});

test("should display the month dropdown", () => {
  expect(monthDropdown()).toBeInTheDocument();
});

test("should display the year dropdown", () => {
  expect(yearDropdown()).toBeInTheDocument();
});

test("change month", async () => {
  expect(grid()).toHaveAccessibleName("July 2015");

  await user.click(yearDropdown());
  await user.click(screen.getByRole("option", { name: "2000" }));
  await user.click(monthDropdown());
  await user.click(screen.getByRole("option", { name: "December" }));

  expect(grid()).toHaveAccessibleName("December 2000");
});
