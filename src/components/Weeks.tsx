import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

/**
 * Render the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weeks(
  props: JSX.IntrinsicElements["tbody"] & {
    month: Date;
    animate?: boolean;
    transitionDirection?: "next" | "prev";
    transitionDuration?: number;
    onTransitionEnter?: () => void;
    onTransitionEntered?: () => void;
  }
) {
  const {
    animate,
    transitionDirection: animateDirection,
    onTransitionEnter: onEnter,
    onTransitionEntered: onEntered,
    month,
    transitionDuration,
    ...tbodyProps
  } = props;

  if (animate) {
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={month.toISOString()}
          timeout={transitionDuration ?? 250}
          classNames={
            animateDirection === "next" ? "rdp-slide-next" : "rdp-slide-prev"
          }
          onEnter={onEnter}
          onEntered={onEntered}
        >
          <tbody {...tbodyProps}>{props.children}</tbody>
        </CSSTransition>
      </TransitionGroup>
    );
  } else {
    return <tbody {...tbodyProps} />;
  }
}

export type WeeksProps = Parameters<typeof Weeks>[0];
