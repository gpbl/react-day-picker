import React, { type HTMLAttributes } from "react";

import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, use `DayButton` in button interaction mode or
 * `DayContent` in cell interaction mode.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Day(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
    modifiers: Modifiers;
  } & HTMLAttributes<HTMLDivElement>,
) {
  const { day, modifiers, ...tdProps } = props;
  const ref = React.useRef<HTMLTableCellElement>(null);
  React.useEffect(() => {
    if (modifiers.focused && tdProps.tabIndex !== undefined) {
      ref.current?.focus();
    }
  }, [modifiers.focused, tdProps.tabIndex]);
  return <td ref={ref} {...tdProps} />;
}

/** Props accepted by the {@link Day} component. */
export type DayProps = Parameters<typeof Day>[0];
