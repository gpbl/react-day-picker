import React from "react";

import { UI } from "../UI";
import { useCalendar, useProps } from "../contexts";

import { Button as DefaultButton } from "./Button";
import { Chevron as DefaultChevron } from "./Chevron";

/**
 * Render the navigation buttons to change the month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Nav() {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious },
    locale,
    components,
    id,
    onNextClick,
    onPrevClick
  } = useProps();

  const calendar = useCalendar();

  const handlePreviousClick = () => {
    if (!calendar.previousMonth) return;
    calendar.goToPreviousMonth();
    onPrevClick?.(calendar.previousMonth);
  };

  const handleNextClick = () => {
    if (!calendar.nextMonth) return;
    calendar.goToNextMonth();
    onNextClick?.(calendar.nextMonth);
  };

  const Button = components?.Button ?? DefaultButton;
  const Chevron = components?.Chevron ?? DefaultChevron;

  return (
    <div role="toolbar" className={classNames[UI.Nav]} style={styles?.[UI.Nav]}>
      <Button
        type="button"
        name="previous-month"
        className={classNames[UI.ButtonPrevious]}
        tabIndex={calendar.previousMonth ? undefined : -1}
        disabled={calendar.previousMonth ? undefined : true}
        aria-label={labelPrevious(calendar.previousMonth, { locale })}
        aria-controls={id}
        onClick={handlePreviousClick}
      >
        <Chevron />
      </Button>
      <Button
        type="button"
        name="next-month"
        className={classNames[UI.ButtonNext]}
        tabIndex={calendar.nextMonth ? undefined : -1}
        disabled={calendar.nextMonth ? undefined : true}
        aria-label={labelNext(calendar.nextMonth, { locale })}
        aria-controls={id}
        onClick={handleNextClick}
      >
        <Chevron orientation="right" />
      </Button>
    </div>
  );
}
