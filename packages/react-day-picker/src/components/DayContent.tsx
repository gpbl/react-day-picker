import React, { type HTMLAttributes } from "react";
import type { CalendarDay } from "../classes/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Render noninteractive content inside a focusable day cell.
 *
 * Used only with `dayInteraction="cell"`. Keep interactive controls out of this
 * component; the enclosing `Day` owns focus and activation. The content uses
 * the existing `day_button` styling slot.
 *
 * @group Components
 */
export function DayContent(
  props: {
    day: CalendarDay;
    modifiers: Modifiers;
  } & HTMLAttributes<HTMLSpanElement>,
) {
  const { day, modifiers, ...spanProps } = props;
  return <span {...spanProps} />;
}

/** Props accepted by {@link DayContent}. */
export type DayContentProps = Parameters<typeof DayContent>[0];
