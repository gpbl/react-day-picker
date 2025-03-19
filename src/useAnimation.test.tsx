import React from "react";

import { render } from "@testing-library/react";

import { user } from "@/test/user";

import { nextButton, previousButton } from "../test/elements";

import { DayPicker } from "./DayPicker";

jest.setSystemTime(new Date(2025, 1, 10));

const getRootContainer = () => document.querySelector(`.rdp-root`);
const getNaveContainers = () => [
  ...document.querySelectorAll(`[data-animated-nav]`)
];
const getMonthContainers = () => [
  ...document.querySelectorAll(`[data-animated-month]`)
];
const getMonthCaptionContainers = () => [
  ...document.querySelectorAll(`[data-animated-caption]`)
];
const getMonthWeekdaysContainers = () => [
  ...document.querySelectorAll(`[data-animated-weekdays]`)
];
const getMonthWeeksContainers = () => [
  ...document.querySelectorAll(`[data-animated-weeks]`)
];

describe("useAnimation", () => {
  describe("animate prop is falsy", () => {
    it("should not render elements with data-animated-* attributes", () => {
      render(<DayPicker />);

      expect(getMonthContainers()).toHaveLength(0);
      expect(getMonthCaptionContainers()).toHaveLength(0);
      expect(getMonthWeekdaysContainers()).toHaveLength(0);
      expect(getMonthWeeksContainers()).toHaveLength(0);
    });
  });

  describe("animate prop is true", () => {
    it("should render elements with data-animated-* attributes", () => {
      render(<DayPicker animate={true} numberOfMonths={2} />);

      expect(getMonthContainers()).toHaveLength(2);
      expect(getMonthCaptionContainers()).toHaveLength(2);
      expect(getMonthWeekdaysContainers()).toHaveLength(2);
      expect(getMonthWeeksContainers()).toHaveLength(2);
    });

    it("should add dom snapshots for each month for animation", async () => {
      render(<DayPicker animate={true} numberOfMonths={2} />);

      await user.click(nextButton());

      expect(getMonthContainers()).toHaveLength(4);
      expect(getMonthCaptionContainers()).toHaveLength(4);
      expect(getMonthWeekdaysContainers()).toHaveLength(4);
      expect(getMonthWeeksContainers()).toHaveLength(4);
    });

    it("should continue animating the same exiting month if month changed during animation", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("February 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("March 2025");

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("February 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("April 2025");
    });

    it("should handle month changes during animation to correctly animate the next month change", async () => {
      render(<DayPicker animate={true} />);
      await user.click(nextButton());
      await user.click(nextButton());

      const animationEndEvent = new Event("animationend");
      getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveTextContent("April 2025");
      expect(getMonthCaptionContainers()[1]).toHaveTextContent("May 2025");
      expect(getMonthContainers()).toHaveLength(2);
      expect(getMonthCaptionContainers()).toHaveLength(2);
      expect(getMonthWeekdaysContainers()).toHaveLength(2);
      expect(getMonthWeeksContainers()).toHaveLength(2);
      expect(getMonthCaptionContainers()[0]).not.toHaveClass(
        "rdp-caption_after_enter"
      );
      expect(getMonthWeeksContainers()[0]).not.toHaveClass(
        "rdp-weeks_after_enter"
      );
    });

    it("should apply the correct animation class when entering month is after the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_before_exit"
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_after_enter"
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_before_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass("rdp-weeks_after_enter");
    });

    it("should apply the correct animation class when entering month is before the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(previousButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_after_exit"
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_before_enter"
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_after_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass(
        "rdp-weeks_before_enter"
      );
    });

    it("should clean up the exiting month after animation ends", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      let navContainers = getNaveContainers();
      let monthContainers = getMonthContainers();
      let monthCaptionContainers = getMonthCaptionContainers();
      let monthWeekdaysContainers = getMonthWeekdaysContainers();
      let monthWeeksContainers = getMonthWeeksContainers();

      expect(navContainers).toHaveLength(1);
      expect(monthContainers).toHaveLength(2);
      expect(monthCaptionContainers).toHaveLength(2);
      expect(monthWeekdaysContainers).toHaveLength(2);
      expect(monthWeeksContainers).toHaveLength(2);

      expect(getRootContainer()).toHaveStyle("isolation: isolate");
      expect(navContainers[0]).toHaveStyle("z-index: 1");
      expect(monthContainers[0]).toHaveStyle("position: relative");
      expect(monthContainers[0]).toHaveStyle("overflow: hidden");
      expect(monthContainers[1]).toHaveStyle("overflow: hidden");
      expect(monthContainers[1]).toHaveStyle("pointer-events: none");
      expect(monthContainers[1]).toHaveStyle("position: absolute");
      expect(monthContainers[1]).toHaveAttribute("aria-hidden", "true");
      expect(monthWeekdaysContainers[0]).toHaveStyle("opacity: 0");
      expect(monthCaptionContainers[1]).toHaveClass("rdp-caption_after_enter");
      expect(monthWeeksContainers[1]).toHaveClass("rdp-weeks_after_enter");

      const animationEndEvent = new Event("animationend");
      getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

      navContainers = getNaveContainers();
      monthContainers = getMonthContainers();
      monthCaptionContainers = getMonthCaptionContainers();
      monthWeekdaysContainers = getMonthWeekdaysContainers();
      monthWeeksContainers = getMonthWeeksContainers();

      expect(navContainers).toHaveLength(1);
      expect(navContainers).toHaveLength(1);
      expect(monthContainers).toHaveLength(1);
      expect(monthCaptionContainers).toHaveLength(1);
      expect(monthWeekdaysContainers).toHaveLength(1);
      expect(monthWeeksContainers).toHaveLength(1);

      expect(getRootContainer()).not.toHaveStyle("isolation: isolate");
      expect(navContainers[0]).not.toHaveStyle("z-index: 1");
      expect(monthContainers[0]).not.toHaveStyle("position: relative");
      expect(monthContainers[0]).not.toHaveStyle("overflow: hidden");
      expect(monthCaptionContainers[0]).not.toHaveClass(
        "rdp-caption_after_enter"
      );
      expect(monthWeeksContainers[0]).not.toHaveClass("rdp-weeks_after_enter");
    });
  });
});
