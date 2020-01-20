import * as React from "react";

import { getDayProps } from "./getDayProps";
import { DayProps } from "../../types/Day";

/**
 * The `Day` component renders the content of the day cell. It returns a button
 * if the day is interactive (i.e. it is clickable).
 *
 * #### Use with DayPicker
 *
 * - To change how the day is formatted, use the {@link formatDay} prop.
 * - Swizzle this component using the {@link components} prop and the
 *   {@link getDayProps} helper.
 * - This component is a bit complex to swizzle: see the source of the
 *   {@link Day} component for an example.
 *
 * @private
 * @category Components
 */

// TODO: split this component in wrapper and container so it is easier to
// swizzle

export function Day(props: DayProps): JSX.Element {
  const { day, modifiers, dayPickerProps } = props;
  const { locale, formatDay } = dayPickerProps;

  const { containerProps, wrapperProps } = getDayProps(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return <span />;
  }

  const Component = modifiers.interactive ? "button" : "span";

  return (
    <Component {...containerProps}>
      <span {...wrapperProps}>{formatDay(day, { locale })}</span>
    </Component>
  );
}
