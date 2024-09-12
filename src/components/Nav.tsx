import React, { MouseEventHandler } from "react";

import { UI } from "../UI.js";
import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the toolbar with the navigation button.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Nav(
  props: {
    onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
    onNextClick?: MouseEventHandler<HTMLButtonElement>;
    previousMonth?: Date | undefined;
    nextMonth?: Date | undefined;
  } & JSX.IntrinsicElements["nav"]
) {
  const {
    onPreviousClick,
    onNextClick,
    previousMonth,
    nextMonth,
    ...navProps
  } = props;

  const {
    components,
    classNames,
    labels: { labelPrevious, labelNext }
  } = useDayPicker();

  return (
    <nav {...navProps}>
      <components.PreviousMonthButton
        type="button"
        className={classNames[UI.PreviousMonthButton]}
        tabIndex={previousMonth ? undefined : -1}
        disabled={previousMonth ? undefined : true}
        aria-label={labelPrevious(previousMonth)}
        onClick={props.onPreviousClick}
      >
        <components.Chevron
          disabled={previousMonth ? undefined : true}
          className={classNames[UI.Chevron]}
          orientation="left"
        />
      </components.PreviousMonthButton>
      <components.NextMonthButton
        type="button"
        className={classNames[UI.NextMonthButton]}
        tabIndex={nextMonth ? undefined : -1}
        disabled={nextMonth ? undefined : true}
        aria-label={labelNext(nextMonth)}
        onClick={props.onNextClick}
      >
        <components.Chevron
          disabled={nextMonth ? undefined : true}
          orientation="right"
          className={classNames[UI.Chevron]}
        />
      </components.NextMonthButton>
    </nav>
  );
}

export type NavProps = Parameters<typeof Nav>[0];
