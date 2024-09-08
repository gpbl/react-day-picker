import React from "react";

import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render the button for a day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
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

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return <button ref={ref} {...buttonProps} />;
}

export type DayButtonProps = Parameters<typeof DayButton>[0];
