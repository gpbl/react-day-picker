import React from "react";

import { UI } from "../UI.js";
import type { CalendarMonth } from "../classes/index.js";
import type { UIProps } from "../types/index.js";

import { DropdownNav } from "./DropdownNav.js";

/**
 * Render the caption of a month in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function MonthCaption(
  props: {
    /** The month where the grid is displayed. */
    month: CalendarMonth;
    /** Used for the aria-label. */
    id: string;
    /** The index where this month is displayed. */
    index: number;
  } & UIProps
) {
  const {
    classNames,
    captionLayout,
    dateLib,
    formatters: { formatCaption },
    locale,
    styles
  } = props.props;

  return (
    <div
      id={props.id}
      className={classNames[UI.MonthCaption]}
      style={styles?.[UI.MonthCaption]}
    >
      {captionLayout?.startsWith("dropdown") ? (
        <DropdownNav
          props={props.props}
          calendar={props.calendar}
          className={classNames[UI.DropdownNav]}
          style={styles?.[UI.DropdownNav]}
          month={props.month}
          index={props.index}
          showMonths={
            captionLayout === "dropdown" || captionLayout === "dropdown-months"
          }
          showYears={
            captionLayout === "dropdown" || captionLayout === "dropdown-years"
          }
        />
      ) : (
        <span
          className={classNames[UI.CaptionLabel]}
          role="status"
          aria-live="polite"
        >
          {formatCaption(props.month.date, { locale }, dateLib)}
        </span>
      )}
    </div>
  );
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];
