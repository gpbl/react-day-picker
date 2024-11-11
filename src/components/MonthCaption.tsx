import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import type { CalendarMonth } from "../classes/index.js";

/**
 * Render the caption of a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function MonthCaption(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
    animate?: boolean;
    transitionDirection?: "next" | "prev";
    transitionDuration?: number;
    onTransitionEnter?: () => void;
    onTransitionEntered?: () => void;
  } & JSX.IntrinsicElements["div"]
) {
  const {
    calendarMonth,
    displayIndex,
    animate,
    transitionDuration,
    transitionDirection: animateDirection,
    onTransitionEnter: onEnter,
    onTransitionEntered: onEntered,
    ...divProps
  } = props;

  if (animate) {
    return (
      <div style={{ overflow: "hidden", position: "relative", zIndex: 0 }}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={calendarMonth.date.toISOString()}
            timeout={transitionDuration ?? 200}
            classNames={
              animateDirection === "next"
                ? "rdp-opacity-next"
                : "rdp-opacity-prev"
            }
            onEnter={onEnter}
            onEntered={onEntered}
          >
            <div {...divProps} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  } else {
    return <div {...divProps} />;
  }
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];
