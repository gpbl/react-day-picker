import React from "react";

import { UI } from "../UI.js";
import type { CalendarMonth } from "../classes/index.js";
import { useProps } from "../contexts/index.js";

import { DropdownNav } from "./DropdownNav.js";

/**
 * Render the caption of a month in the calendar.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function MonthCaption(props: {
  /** The month where the grid is displayed. */
  month: CalendarMonth;
  /** Used for the aria-label. */
  id: string;
  /** The index where this month is displayed. */
  index: number;
}) {
  const {
    classNames,
    captionLayout,
    dateLib,
    formatters: { formatCaption },
    labels: { labelCaption },
    locale,
    styles
  } = useProps();

  return (
    <div
      id={props.id}
      className={classNames[UI.MonthCaption]}
      style={styles?.[UI.MonthCaption]}
    >
      {captionLayout?.startsWith("dropdown") ? (
        <DropdownNav
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
          aria-label={
            labelCaption(props.month.date, { locale }, dateLib) ?? undefined
          }
        >
          {formatCaption(props.month.date, { locale }, dateLib)}
        </span>
      )}
    </div>
  );
}

export type MonthCaptionProps = Parameters<typeof MonthCaption>[0];
