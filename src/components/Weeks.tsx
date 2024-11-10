import React, { useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Weeks(props: JSX.IntrinsicElements["tbody"]) {
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const dayPicker = useDayPicker();

  const key = dayPicker.months[0].date.toISOString();

  console.log(key);
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={key}
        timeout={250}
        classNames={
          direction === "next"
            ? "animate rdp-slide-next"
            : "animate rdp-slide-prev"
        }
        onEnter={() => setIsTransitioning(true)}
        onEntered={() => setIsTransitioning(false)}
      >
        <tbody {...props}>{props.children}</tbody>
      </CSSTransition>
    </TransitionGroup>
  );
  // return <tbody {...props} />;
}

export type WeeksProps = Parameters<typeof Weeks>[0];
