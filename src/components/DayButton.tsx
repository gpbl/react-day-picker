import React, { type HTMLAttributes } from "react";

import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render the date as string inside the day grid cell.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function DayButton(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers for the day. */
    modifiers: Modifiers;
  } & JSX.IntrinsicElements["button"]
) {
  const { day, modifiers, ...buttonProps } = props;
  return <button {...buttonProps} />;
}

export type DayButtonProps = Parameters<typeof DayButton>[0];

/**
 * @deprecated The component has been renamed. Use `DayDate` instead.
 * @protected
 */
export const DayContent = DayButton;
/**
 * @deprecated The type has been renamed. Use `DayDateProps` instead.
 * @protected
 */
export type DayContentProps = DayButtonProps;
