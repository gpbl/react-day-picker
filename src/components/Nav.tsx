import React from "react";

import { ChevronFlag, UI } from "../UI.js";
import type { UIProps } from "../types/shared.js";

import { Button as DefaultButton } from "./Button.js";
import { Chevron as DefaultChevron } from "./Chevron.js";

/**
 * Render the navigation buttons to change the month.
 *
 * Use the `components` prop to swap this component with a custom one.
 *
 * @group Components
 * @see https://daypicker.dev/advanced-guides/custom-components
 */
export function Nav(props: UIProps) {
  const {
    classNames,
    styles,
    labels: { labelNext, labelPrevious, labelNav },
    locale,
    components,
    id,
    onNextClick,
    onPrevClick
  } = props.props;

  const calendar = props.calendar;

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
    <div
      role="toolbar"
      className={classNames[UI.Nav]}
      style={styles?.[UI.Nav]}
      aria-label={labelNav(calendar)}
    >
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
        <Chevron
          style={styles?.[UI.Chevron]}
          className={classNames[UI.Chevron]}
          classNameDisabled={classNames[ChevronFlag.disabled]}
          props={props.props}
          calendar={props.calendar}
          orientation="left"
        />
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
        <Chevron
          orientation="right"
          style={styles?.[UI.Chevron]}
          className={classNames[UI.Chevron]}
          classNameDisabled={classNames[ChevronFlag.disabled]}
          props={props.props}
          calendar={props.calendar}
        />
      </Button>
    </div>
  );
}
