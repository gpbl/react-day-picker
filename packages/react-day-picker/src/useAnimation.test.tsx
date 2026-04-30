import React from "react";
import { nextButton, previousButton } from "@/test/elements";
import { render } from "@/test/render";
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

describe("useAnimation", () => {
  describe("animate prop is falsy", () => {
    beforeEach(() => {
      render(<DayPicker />);
    });

    test("does not render animated month containers", () => {
      expect(getMonthContainers()).toHaveLength(0);
    });

    test("does not render animated caption containers", () => {
      expect(getMonthCaptionContainers()).toHaveLength(0);
    });

    test("does not render animated weekday containers", () => {
      expect(getMonthWeekdaysContainers()).toHaveLength(0);
    });

    test("does not render animated week containers", () => {
      expect(getMonthWeeksContainers()).toHaveLength(0);
    });
  });

  describe("animate prop is true", () => {
    describe("when rendering two months", () => {
      beforeEach(() => {
        render(<DayPicker animate={true} numberOfMonths={2} />);
      });

      test("renders two animated month containers", () => {
        expect(getMonthContainers()).toHaveLength(2);
      });

      test("renders two animated caption containers", () => {
        expect(getMonthCaptionContainers()).toHaveLength(2);
      });

      test("renders two animated weekday containers", () => {
        expect(getMonthWeekdaysContainers()).toHaveLength(2);
      });

      test("renders two animated week containers", () => {
        expect(getMonthWeeksContainers()).toHaveLength(2);
      });

      describe("when navigating to the next month", () => {
        beforeEach(async () => {
          await user.click(nextButton());
        });

        test("keeps snapshots for four animated month containers", () => {
          expect(getMonthContainers()).toHaveLength(4);
        });

        test("keeps snapshots for four animated caption containers", () => {
          expect(getMonthCaptionContainers()).toHaveLength(4);
        });

        test("keeps snapshots for four animated weekday containers", () => {
          expect(getMonthWeekdaysContainers()).toHaveLength(4);
        });

        test("keeps snapshots for four animated week containers", () => {
          expect(getMonthWeeksContainers()).toHaveLength(4);
        });
      });
    });

    describe("when navigating while a month is exiting", () => {
      beforeEach(async () => {
        render(<DayPicker animate={true} />);
        await user.click(nextButton());
      });

      test("keeps February as the exiting month", () => {
        expect(getMonthCaptionContainers()[0]).toHaveTextContent(
          "February 2025",
        );
      });

      test("shows March as the entering month", () => {
        expect(getMonthCaptionContainers()[1]).toHaveTextContent("March 2025");
      });

      describe("when navigating again", () => {
        beforeEach(async () => {
          await user.click(nextButton());
        });

        test("keeps February as the exiting month", () => {
          expect(getMonthCaptionContainers()[0]).toHaveTextContent(
            "February 2025",
          );
        });

        test("shows April as the entering month", () => {
          expect(getMonthCaptionContainers()[1]).toHaveTextContent(
            "April 2025",
          );
        });
      });
    });

    describe("when navigating after a previous animation ends", () => {
      beforeEach(async () => {
        render(<DayPicker animate={true} />);
        await user.click(nextButton());
        await user.click(nextButton());

        const animationEndEvent = new Event("animationend");
        getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);

        await user.click(nextButton());
      });

      test("shows April as the exiting month", () => {
        expect(getMonthCaptionContainers()[0]).toHaveTextContent("April 2025");
      });

      test("shows May as the entering month", () => {
        expect(getMonthCaptionContainers()[1]).toHaveTextContent("May 2025");
      });

      test("renders two animated month containers", () => {
        expect(getMonthContainers()).toHaveLength(2);
      });

      test("renders two animated caption containers", () => {
        expect(getMonthCaptionContainers()).toHaveLength(2);
      });

      test("renders two animated weekday containers", () => {
        expect(getMonthWeekdaysContainers()).toHaveLength(2);
      });

      test("renders two animated week containers", () => {
        expect(getMonthWeeksContainers()).toHaveLength(2);
      });

      test("clears the previous caption enter class", () => {
        expect(getMonthCaptionContainers()[0]).not.toHaveClass(
          "rdp-caption_after_enter",
        );
      });

      test("clears the previous weeks enter class", () => {
        expect(getMonthWeeksContainers()[0]).not.toHaveClass(
          "rdp-weeks_after_enter",
        );
      });
    });

    describe("when entering month is after the exiting month", () => {
      beforeEach(async () => {
        render(<DayPicker animate={true} />);
        await user.click(nextButton());
      });

      test("marks the exiting caption before exit", () => {
        expect(getMonthCaptionContainers()[0]).toHaveClass(
          "rdp-caption_before_exit",
        );
      });

      test("marks the entering caption after enter", () => {
        expect(getMonthCaptionContainers()[1]).toHaveClass(
          "rdp-caption_after_enter",
        );
      });

      test("marks the exiting weeks before exit", () => {
        expect(getMonthWeeksContainers()[0]).toHaveClass(
          "rdp-weeks_before_exit",
        );
      });

      test("marks the entering weeks after enter", () => {
        expect(getMonthWeeksContainers()[1]).toHaveClass(
          "rdp-weeks_after_enter",
        );
      });
    });

    describe("when entering month is before the exiting month", () => {
      beforeEach(async () => {
        render(<DayPicker animate={true} />);
        await user.click(previousButton());
      });

      test("marks the exiting caption after exit", () => {
        expect(getMonthCaptionContainers()[0]).toHaveClass(
          "rdp-caption_after_exit",
        );
      });

      test("marks the entering caption before enter", () => {
        expect(getMonthCaptionContainers()[1]).toHaveClass(
          "rdp-caption_before_enter",
        );
      });

      test("marks the exiting weeks after exit", () => {
        expect(getMonthWeeksContainers()[0]).toHaveClass(
          "rdp-weeks_after_exit",
        );
      });

      test("marks the entering weeks before enter", () => {
        expect(getMonthWeeksContainers()[1]).toHaveClass(
          "rdp-weeks_before_enter",
        );
      });
    });

    describe("when a month is exiting", () => {
      beforeEach(async () => {
        render(<DayPicker animate={true} />);
        await user.click(nextButton());
      });

      test("renders two animated nav containers", () => {
        expect(getNavContainers()).toHaveLength(2);
      });

      test("renders two animated month containers", () => {
        expect(getMonthContainers()).toHaveLength(2);
      });

      test("renders two animated caption containers", () => {
        expect(getMonthCaptionContainers()).toHaveLength(2);
      });

      test("renders two animated weekday containers", () => {
        expect(getMonthWeekdaysContainers()).toHaveLength(2);
      });

      test("renders two animated week containers", () => {
        expect(getMonthWeeksContainers()).toHaveLength(2);
      });

      test("isolates the root container", () => {
        expect(getRootContainer()).toHaveStyle("isolation: isolate");
      });

      test("places the entering nav container above the exiting nav container", () => {
        expect(getNavContainers()[1]).toHaveStyle("z-index: 1");
      });

      test("positions the exiting month container relatively", () => {
        expect(getMonthContainers()[0]).toHaveStyle("position: relative");
      });

      test("hides overflow for the exiting month container", () => {
        expect(getMonthContainers()[0]).toHaveStyle("overflow: hidden");
      });

      test("hides overflow for the entering month container", () => {
        expect(getMonthContainers()[1]).toHaveStyle("overflow: hidden");
      });

      test("disables pointer events for the entering month container", () => {
        expect(getMonthContainers()[1]).toHaveStyle("pointer-events: none");
      });

      test("positions the entering month container absolutely", () => {
        expect(getMonthContainers()[1]).toHaveStyle("position: absolute");
      });

      test("hides the entering month from assistive technology", () => {
        expect(getMonthContainers()[1]).toHaveAttribute("aria-hidden", "true");
      });

      test("hides the exiting weekday container", () => {
        expect(getMonthWeekdaysContainers()[0]).toHaveStyle("opacity: 0");
      });

      test("marks the entering caption after enter", () => {
        expect(getMonthCaptionContainers()[1]).toHaveClass(
          "rdp-caption_after_enter",
        );
      });

      test("marks the entering weeks after enter", () => {
        expect(getMonthWeeksContainers()[1]).toHaveClass(
          "rdp-weeks_after_enter",
        );
      });

      describe("when the animation ends", () => {
        beforeEach(() => {
          const animationEndEvent = new Event("animationend");
          getMonthCaptionContainers()[0].dispatchEvent(animationEndEvent);
        });

        test("keeps one animated nav container", () => {
          expect(getNavContainers()).toHaveLength(1);
        });

        test("keeps one animated month container", () => {
          expect(getMonthContainers()).toHaveLength(1);
        });

        test("keeps one animated caption container", () => {
          expect(getMonthCaptionContainers()).toHaveLength(1);
        });

        test("keeps one animated weekday container", () => {
          expect(getMonthWeekdaysContainers()).toHaveLength(1);
        });

        test("keeps one animated week container", () => {
          expect(getMonthWeeksContainers()).toHaveLength(1);
        });

        test("clears root isolation", () => {
          expect(getRootContainer()).not.toHaveStyle("isolation: isolate");
        });

        test("clears nav stacking", () => {
          expect(getNavContainers()[0]).not.toHaveStyle("z-index: 1");
        });

        test("clears relative month positioning", () => {
          expect(getMonthContainers()[0]).not.toHaveStyle("position: relative");
        });

        test("clears month overflow clipping", () => {
          expect(getMonthContainers()[0]).not.toHaveStyle("overflow: hidden");
        });

        test("clears the caption enter class", () => {
          expect(getMonthCaptionContainers()[0]).not.toHaveClass(
            "rdp-caption_after_enter",
          );
        });

        test("clears the weeks enter class", () => {
          expect(getMonthWeeksContainers()[0]).not.toHaveClass(
            "rdp-weeks_after_enter",
          );
        });
      });
    });
  });
});
