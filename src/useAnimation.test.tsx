import React from "react";

import { render } from "@testing-library/react";

import { user } from "@/test/user";

import { nextButton, previousButton } from "../test/elements";

import { DayPicker } from "./DayPicker";

jest.setSystemTime(new Date(2025, 1, 10));

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
    it("should not change the default props", () => {
      render(<DayPicker />);

      expect(getMonthContainers()).toHaveLength(0);
      expect(getMonthCaptionContainers()).toHaveLength(0);
      expect(getMonthWeekdaysContainers()).toHaveLength(0);
      expect(getMonthWeeksContainers()).toHaveLength(0);
    });
  });

  describe("animate prop is true", () => {
    it("should add data attributes if animate is true", () => {
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

    it("should apply the correct animation class when entering month is after the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_prev_exit"
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_next_enter"
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_prev_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass("rdp-weeks_next_enter");
    });

    it("should apply the correct animation class when entering month is before the exiting month", async () => {
      render(<DayPicker animate={true} />);

      await user.click(previousButton());

      expect(getMonthCaptionContainers()[0]).toHaveClass(
        "rdp-caption_next_exit"
      );
      expect(getMonthCaptionContainers()[1]).toHaveClass(
        "rdp-caption_prev_enter"
      );

      expect(getMonthWeeksContainers()[0]).toHaveClass("rdp-weeks_next_exit");
      expect(getMonthWeeksContainers()[1]).toHaveClass("rdp-weeks_prev_enter");
    });

    it("should clean up the exiting month after animation ends", async () => {
      render(<DayPicker animate={true} />);

      await user.click(nextButton());

      expect(getMonthContainers()).toHaveLength(2);
      expect(getMonthCaptionContainers()).toHaveLength(2);
      expect(getMonthWeekdaysContainers()).toHaveLength(2);
      expect(getMonthWeeksContainers()).toHaveLength(2);

      const animationEndEvent = new Event("animationend");
      getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

      expect(getMonthContainers()).toHaveLength(1);
      expect(getMonthCaptionContainers()).toHaveLength(1);
      expect(getMonthWeekdaysContainers()).toHaveLength(1);
      expect(getMonthWeeksContainers()).toHaveLength(1);

      expect(getMonthCaptionContainers()[0]).not.toHaveClass(
        "rdp-caption_next_enter"
      );

      expect(getMonthWeeksContainers()[0]).not.toHaveClass(
        "rdp-weeks_next_enter"
      );
    });
  });
});
