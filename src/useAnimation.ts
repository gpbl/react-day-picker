import React, { useLayoutEffect, useRef } from "react";

import { Animation } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { CalendarMonth } from "./classes/CalendarMonth.js";
import type { DateLib } from "./classes/DateLib.js";
import { ClassNames } from "./types/shared.js";

const ANIMATION_SELECTORS = {
  NAV: "[data-animated-nav]",
  MONTH: "[data-animated-month]",
  CAPTION: "[data-animated-caption]",
  WEEKDAYS: "[data-animated-weekdays]",
  WEEKS: "[data-animated-weeks]"
};

/** @private */
export function useAnimation(
  rootElRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean,
  {
    classNames,
    months,
    focused,
    dateLib
  }: {
    classNames: ClassNames;
    months: CalendarMonth[];
    focused: CalendarDay | undefined;
    dateLib: DateLib;
  }
): void {
  const previousRootElSnapshotRef = useRef<HTMLElement>(null);
  const previousMonthsRef = useRef(months);
  const animatingRef = useRef(false);

  useLayoutEffect(() => {
    // get previous months before updating the previous months ref
    const previousMonths = previousMonthsRef.current;
    // update previous months ref for next effect trigger
    previousMonthsRef.current = months;

    if (
      !enabled ||
      !rootElRef.current ||
      // safety check because the ref can be set to anything by consumers
      !(rootElRef.current instanceof HTMLElement) ||
      // validation required for the animation to work as expected
      months.length === 0 ||
      previousMonths.length === 0 ||
      months.length !== previousMonths.length
    ) {
      return;
    }

    const isSameMonth = dateLib.isSameMonth(
      months[0].date,
      previousMonths[0].date
    );

    const isAfterPreviousMonth = dateLib.isAfter(
      months[0].date,
      previousMonths[0].date
    );

    const captionAnimationClass = isAfterPreviousMonth
      ? classNames[Animation.caption_after_enter]
      : classNames[Animation.caption_before_enter];

    const weeksAnimationClass = isAfterPreviousMonth
      ? classNames[Animation.weeks_after_enter]
      : classNames[Animation.weeks_before_enter];

    // get previous root element snapshot before updating the snapshot ref
    const previousRootElSnapshot = previousRootElSnapshotRef.current;

    // update snapshot for next effect trigger
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      // if this effect is triggered while animating, we need to clean up the new root snapshot
      // to put it in the same state as when not animating, to correctly animate the next month change
      const currentMonthElsSnapshot = [
        ...(rootElSnapshot.querySelectorAll(ANIMATION_SELECTORS.MONTH) ?? [])
      ];
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        // remove the old month snapshots from the new root snapshot
        const previousMonthElSnapshot = currentMonthElSnapshot.querySelector(
          ANIMATION_SELECTORS.MONTH
        );
        if (
          previousMonthElSnapshot &&
          currentMonthElSnapshot.contains(previousMonthElSnapshot)
        ) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }

        // remove animation classes from the new month snapshots
        const captionEl = currentMonthElSnapshot.querySelector(
          ANIMATION_SELECTORS.CAPTION
        );
        if (captionEl && captionEl instanceof HTMLElement) {
          captionEl.classList.remove(captionAnimationClass);
        }

        const weeksEl = currentMonthElSnapshot.querySelector(
          ANIMATION_SELECTORS.WEEKS
        );
        if (weeksEl && weeksEl instanceof HTMLElement) {
          weeksEl.classList.remove(weeksAnimationClass);
        }
      });

      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }

    if (
      animatingRef.current ||
      isSameMonth ||
      // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
      focused
    ) {
      return;
    }

    const previousMonthEls = [
      ...(previousRootElSnapshot?.querySelectorAll(ANIMATION_SELECTORS.MONTH) ??
        [])
    ];

    const currentMonthEls = [
      ...(rootElRef.current.querySelectorAll(ANIMATION_SELECTORS.MONTH) ?? [])
    ];

    if (
      currentMonthEls &&
      currentMonthEls.every((el) => el instanceof HTMLElement) &&
      previousMonthEls &&
      previousMonthEls.every((el) => el instanceof HTMLElement)
    ) {
      animatingRef.current = true;
      const cleanUpFunctions: (() => void)[] = [];

      // set isolation to isolate to isolate the stacking context during animation
      rootElRef.current.style.isolation = "isolate";
      // set z-index to 1 to ensure the nav is clickable over the other elements being animated
      const navEl = rootElRef.current.querySelector(ANIMATION_SELECTORS.NAV);
      if (navEl && navEl instanceof HTMLElement) {
        navEl.style.zIndex = "1";
      }

      currentMonthEls.forEach((currentMonthEl, index) => {
        const previousMonthEl = previousMonthEls[index];

        if (!previousMonthEl) {
          return;
        }

        // animate new displayed month
        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = currentMonthEl.querySelector(
          ANIMATION_SELECTORS.CAPTION
        );
        if (captionEl && captionEl instanceof HTMLElement) {
          captionEl.classList.add(captionAnimationClass);
        }

        const weeksEl = currentMonthEl.querySelector(ANIMATION_SELECTORS.WEEKS);
        if (weeksEl && weeksEl instanceof HTMLElement) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        // animate new displayed month end

        const cleanUp = () => {
          animatingRef.current = false;

          if (rootElRef.current) {
            rootElRef.current.style.isolation = "";
          }
          if (navEl && navEl instanceof HTMLElement) {
            navEl.style.zIndex = "";
          }

          if (captionEl && captionEl instanceof HTMLElement) {
            captionEl.classList.remove(captionAnimationClass);
          }
          if (weeksEl && weeksEl instanceof HTMLElement) {
            weeksEl.classList.remove(weeksAnimationClass);
          }
          currentMonthEl.style.position = "";
          currentMonthEl.style.overflow = "";
          if (currentMonthEl.contains(previousMonthEl)) {
            currentMonthEl.removeChild(previousMonthEl);
          }
        };
        cleanUpFunctions.push(cleanUp);

        // animate old displayed month
        previousMonthEl.style.pointerEvents = "none";
        previousMonthEl.style.position = "absolute";
        previousMonthEl.style.overflow = "hidden";
        previousMonthEl.setAttribute("aria-hidden", "true");

        // hide the weekdays container of the old month and only the new one
        const previousWeekdaysEl = previousMonthEl.querySelector(
          ANIMATION_SELECTORS.WEEKDAYS
        );
        if (previousWeekdaysEl && previousWeekdaysEl instanceof HTMLElement) {
          previousWeekdaysEl.style.opacity = "0";
        }

        const previousCaptionEl = previousMonthEl.querySelector(
          ANIMATION_SELECTORS.CAPTION
        );
        if (previousCaptionEl && previousCaptionEl instanceof HTMLElement) {
          previousCaptionEl.classList.add(
            isAfterPreviousMonth
              ? classNames[Animation.caption_before_exit]
              : classNames[Animation.caption_after_exit]
          );
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }

        const previousWeeksEl = previousMonthEl.querySelector(
          ANIMATION_SELECTORS.WEEKS
        );
        if (previousWeeksEl && previousWeeksEl instanceof HTMLElement) {
          previousWeeksEl.classList.add(
            isAfterPreviousMonth
              ? classNames[Animation.weeks_before_exit]
              : classNames[Animation.weeks_after_exit]
          );
        }

        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}
