import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

/**
 * When enabled, animate the children with a CSS transition.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Transition(props: {
  transitionKey: string;
  enabled?: boolean;
  className: string;
  direction?: "next" | "previous";
  duration?: number;
  onEnter?: () => void;
  onEntered?: () => void;
  children: React.ReactNode;
}) {
  if (!props.enabled) {
    return <>{props.children}</>;
  }
  const { direction = "next", duration = 200, className } = props;
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={props.transitionKey}
        timeout={duration ?? 200}
        classNames={`${className}-${direction}`}
        onEnter={props.onEnter}
        onEntered={props.onEntered}
      >
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
}

export type TransitionProps = Parameters<typeof Transition>[0];
