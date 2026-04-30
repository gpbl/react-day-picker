import { render } from "@/test/render";
import React from "react";
import { nextButton, previousButton } from "@/test/elements";
import { setTestTime } from "@/test/setTestTime";
import { user } from "@/test/user";
import { DayPicker } from "./DayPicker";

setTestTime(new Date(2025, 1, 10));

const getRootContainer = () => document.querySelector(`.rdp-root`);
const getNavContainers = () => [
  ...document.querySelectorAll(`[data-animated-nav]`),
];
const getMonthContainers = () => [
  ...document.querySelectorAll(`[data-animated-month]`),
];
const getMonthCaptionContainers = () => [
  ...document.querySelectorAll(`[data-animated-caption]`),
];
const getMonthWeekdaysContainers = () => [
  ...document.querySelectorAll(`[data-animated-weekdays]`),
];
const getMonthWeeksContainers = () => [
  ...document.querySelectorAll(`[data-animated-weeks]`),
];

function expectAnimatedPartsToHaveLength(length: number) {
  expect(getMonthContainers()).toHaveLength(length);
  expect(getMonthCaptionContainers()).toHaveLength(length);
  expect(getMonthWeekdaysContainers()).toHaveLength(length);
  expect(getMonthWeeksContainers()).toHaveLength(length);
}

function expectActiveAnimationState() {
  const navContainers = getNavContainers();
  const monthContainers = getMonthContainers();
  const monthCaptionContainers = getMonthCaptionContainers();
  const monthWeekdaysContainers = getMonthWeekdaysContainers();
  const monthWeeksContainers = getMonthWeeksContainers();

  expect(navContainers).toHaveLength(2);
  expect(monthContainers).toHaveLength(2);
  expect(monthCaptionContainers).toHaveLength(2);
  expect(monthWeekdaysContainers).toHaveLength(2);
  expect(monthWeeksContainers).toHaveLength(2);
  expect(getRootContainer()).toHaveStyle("isolation: isolate");
  expect(navContainers[1]).toHaveStyle("z-index: 1");
  expect(monthContainers[0]).toHaveStyle("position: relative");
  expect(monthContainers[0]).toHaveStyle("overflow: hidden");
  expect(monthContainers[1]).toHaveStyle("overflow: hidden");
  expect(monthContainers[1]).toHaveStyle("pointer-events: none");
  expect(monthContainers[1]).toHaveStyle("position: absolute");
  expect(monthContainers[1]).toHaveAttribute("aria-hidden", "true");
  expect(monthWeekdaysContainers[0]).toHaveStyle("opacity: 0");
  expect(monthCaptionContainers[1]).toHaveClass("rdp-caption_after_enter");
  expect(monthWeeksContainers[1]).toHaveClass("rdp-weeks_after_enter");
}

function expectCleanedAnimationState() {
  const navContainers = getNavContainers();
  const monthContainers = getMonthContainers();
  const monthCaptionContainers = getMonthCaptionContainers();
  const monthWeekdaysContainers = getMonthWeekdaysContainers();
  const monthWeeksContainers = getMonthWeeksContainers();

  expect(navContainers).toHaveLength(1);
  expect(monthContainers).toHaveLength(1);
  expect(monthCaptionContainers).toHaveLength(1);
  expect(monthWeekdaysContainers).toHaveLength(1);
  expect(monthWeeksContainers).toHaveLength(1);
  expect(getRootContainer()).not.toHaveStyle("isolation: isolate");
  expect(navContainers[0]).not.toHaveStyle("z-index: 1");
  expect(monthContainers[0]).not.toHaveStyle("position: relative");
  expect(monthContainers[0]).not.toHaveStyle("overflow: hidden");
  expect(monthCaptionContainers[0]).not.toHaveClass("rdp-caption_after_enter");
  expect(monthWeeksContainers[0]).not.toHaveClass("rdp-weeks_after_enter");
}

describe("useAnimation", () => {
  describe("animate prop is falsy", () => {
    test("should not render elements with data-animated-* attributes", () => {
      render(<DayPicker />);

      expectAnimatedPartsToHaveLength(0);
    });
  });

  describe("animate prop is true", () => {
    test("should render elements with data-animated-* attributes", () => {
      render(<DayPicker animate={true} numberOfMonths={2} />);

      expectAnimatedPartsToHaveLength(2);
    });

    test("should add dom snapshots for each month for animation", async () => {
      render(<DayPicker animate={true} numberOfMonths={2} />);

      await user.click(nextButton());

      expectAnimatedPartsToHaveLength(4);
    });

    test("should continue animating the same exiting month if month changed during animation", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("February 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("March 2025");

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("February 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("April 2025");
    });

    test("should handle month changes during animation to correctly animate the next month change", async () => {
      render(<DayPicker animate={true} />);
      await user.click(nextButton());
      await user.click(nextButton());

      const animationEndEvent = new Event("animationend");
      getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("April 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("May 2025");
      expectAnimatedPartsToHaveLength(2);
      expect(getMonthCaptionContainers()[0]).not.toHaveClass(
        "rdp-caption_after_enter",
      );
      expect(getMonthWeeksContainers()[0]).not.toHaveClass(
        "rdp-weeks_after_enter",
      );
    });

    test("should apply the correct animation class when entering month is after the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_before_exit",
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_after_enter",
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_before_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass("rdp-weeks_after_enter");
    });

    test("should apply the correct animation class when entering month is before the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(previousButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_after_exit",
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_before_enter",
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_after_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass(
        "rdp-weeks_before_enter",
      );
    });

    test("should clean up the exiting month after animation ends", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expectActiveAnimationState();

      const animationEndEvent = new Event("animationend");
      getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

      expectCleanedAnimationState();
    });
  });
});
