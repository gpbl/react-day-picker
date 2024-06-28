import React, { ReactNode } from "react";

import { UI } from "../UI.js";
import type { CalendarDay } from "../classes/index.js";
import type { Modifiers, UIProps } from "../types/index.js";

/**
 * Render the date as string inside the day grid cell.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function DayDate(
  props: {
    day: CalendarDay;
    /** The modifiers for the day. */
    modifiers: Modifiers;
    children: ReactNode;
  } & JSX.IntrinsicElements["button"] &
    UIProps
) {
  const { day, modifiers, ...buttonProps } = props;
  const {
    classNames,
    styles,
    components: { Button }
  } = props.props;
  return (
    <Button
      className={classNames[UI.DayDate]}
      style={styles?.[UI.DayDate]}
      {...buttonProps}
    />
  );
}

export type DayDateProps = Parameters<typeof DayDate>[0];

/**
 * @deprecated The component has been renamed. Use `DayDate` instead.
 * @protected
 */
export const DayContent = DayDate;
/**
 * @deprecated The type has been renamed. Use `DayDateProps` instead.
 * @protected
 */
export type DayContentProps = DayDateProps;
