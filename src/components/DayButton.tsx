import React, { type ButtonHTMLAttributes } from "react";

import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function DayButton(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
    modifiers: Modifiers;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { day, modifiers, ...buttonProps } = props;

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return <button ref={ref} {...buttonProps} />;
}

export type DayButtonProps = Parameters<typeof DayButton>[0];
