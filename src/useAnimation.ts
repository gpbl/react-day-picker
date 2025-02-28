import React, { useLayoutEffect, useRef } from "react";

import { Animation } from "./UI.js";
import type { CalendarDay } from "./classes/CalendarDay.js";
import { CalendarMonth } from "./classes/CalendarMonth.js";
import type { DateLib } from "./classes/DateLib.js";
import { ClassNames } from "./types/shared.js";

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
      !(rootElRef.current instanceof HTMLElement)
    ) {
      return;
    }

    // get previous root element snapshot before updating the snapshot ref
    const previousRootElSnapshot = previousRootElSnapshotRef.current;

    // update snapshot for next effect trigger
    const rootElSnapshot = rootElRef.current.cloneNode(true);
    if (rootElSnapshot instanceof HTMLElement) {
      // if this effect is triggered while animating, we need to remove the old month snapshots from the new root snapshot
      const currentMonthElsSnapshot = [
        ...(rootElSnapshot.querySelectorAll(`[data-month-container]`) ?? [])
      ];
      currentMonthElsSnapshot.forEach((currentMonthElSnapshot) => {
        const previousMonthElSnapshot = currentMonthElSnapshot.querySelector(
          `[data-month-container]`
        );
        if (
          previousMonthElSnapshot &&
          currentMonthElSnapshot.contains(previousMonthElSnapshot)
        ) {
          currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
        }
      });

      previousRootElSnapshotRef.current = rootElSnapshot;
    } else {
      previousRootElSnapshotRef.current = null;
    }

    // validation required for the animation to work as expected
    if (
      months.length === 0 ||
      previousMonths.length === 0 ||
      months.length !== previousMonths.length ||
      // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
      focused ||
      animatingRef.current
    ) {
      return;
    }

    const isSameMonth = dateLib.isSameMonth(
      months[0].date,
      previousMonths[0].date
    );

    if (isSameMonth) {
      return;
    }

    const previousMonthEls = [
      ...(previousRootElSnapshot?.querySelectorAll(`[data-month-container]`) ??
        [])
    ];

    const currentMonthEls = [
      ...(rootElRef.current.querySelectorAll(`[data-month-container]`) ?? [])
    ];

    if (
      currentMonthEls &&
      currentMonthEls.every((el) => el instanceof HTMLElement) &&
      previousMonthEls &&
      previousMonthEls.every((el) => el instanceof HTMLElement)
    ) {
      animatingRef.current = true;
      const cleanUpFunctions: (() => void)[] = [];

      const isAfterPreviousMonth = dateLib.isAfter(
        months[0].date,
        previousMonths[0].date
      );

      currentMonthEls.forEach((currentMonthEl, index) => {
        const previousMonthEl = previousMonthEls[index];

        if (!previousMonthEl) {
          return;
        }

        // animate new displayed month
        const captionAnimationClass = isAfterPreviousMonth
          ? classNames[Animation.caption_next_enter]
          : classNames[Animation.caption_prev_enter];

        const weeksAnimationClass = isAfterPreviousMonth
          ? classNames[Animation.weeks_next_enter]
          : classNames[Animation.weeks_prev_enter];

        currentMonthEl.style.position = "relative";
        currentMonthEl.style.overflow = "hidden";
        const captionEl = currentMonthEl.querySelector(
          `[data-month-caption-container]`
        );
        if (captionEl && captionEl instanceof HTMLElement) {
          captionEl.classList.add(captionAnimationClass);
        }

        const weeksEl = currentMonthEl.querySelector(`[data-weeks-container]`);
        if (weeksEl && weeksEl instanceof HTMLElement) {
          weeksEl.classList.add(weeksAnimationClass);
        }
        // animate new displayed month end

        const cleanUp = () => {
          animatingRef.current = false;
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
          `[data-weekdays-container]`
        );
        if (previousWeekdaysEl && previousWeekdaysEl instanceof HTMLElement) {
          previousWeekdaysEl.style.opacity = "0";
        }

        const previousCaptionEl = previousMonthEl.querySelector(
          `[data-month-caption-container]`
        );
        if (previousCaptionEl && previousCaptionEl instanceof HTMLElement) {
          previousCaptionEl.classList.add(
            isAfterPreviousMonth
              ? classNames[Animation.caption_prev_exit]
              : classNames[Animation.caption_next_exit]
          );
          previousCaptionEl.addEventListener("animationend", cleanUp);
        }

        const previousWeeksEl = previousMonthEl.querySelector(
          `[data-weeks-container]`
        );
        if (previousWeeksEl && previousWeeksEl instanceof HTMLElement) {
          previousWeeksEl.classList.add(
            isAfterPreviousMonth
              ? classNames[Animation.weeks_prev_exit]
              : classNames[Animation.weeks_next_exit]
          );
        }

        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
      });
    }
  });
}
