import React from "react";
import type { HTMLAttributes, ReactNode } from "react";

import type { CalendarDay } from "../classes";
import type { DayModifiers } from "../types";

/**
 * Render the gridcell of a day in the calendar and handle the interaction and
 * the focus with they day.
 *
 * Use the `components` prop to swap this component with a custom one. If you
 * need to just change the content of the day cell, consider swapping the
 * `DayDate` component instead.
 *
 * @group Components
 * @see https://react-day-picker.js.org/advanced-guides/custom-components
 */
export function Day(props: {
  day: CalendarDay;
  modifiers: DayModifiers;
  children?: ReactNode;
  rootProps: Pick<
    JSX.IntrinsicElements["div"],
    | "className"
    | "style"
    | "tabIndex"
    | "aria-colindex"
    | "aria-disabled"
    | "aria-hidden"
    | "aria-label"
    | "aria-selected"
    | "onClick"
    | "onBlur"
    | "onFocus"
    | "onKeyDown"
    | "onKeyPress"
    | "onKeyUp"
    | "onMouseEnter"
    | "onMouseLeave"
    | "onPointerEnter"
    | "onPointerLeave"
    | "onTouchCancel"
    | "onTouchEnd"
    | "onTouchMove"
    | "onTouchStart"
    | "ref"
    | "role"
  >;
}) {
  return <div {...props.rootProps}>{props.children}</div>;
}

export type DayProps = Parameters<typeof Day>[0];
