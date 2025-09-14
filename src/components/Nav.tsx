import React, {
  type HTMLAttributes,
  type MouseEventHandler,
  useCallback,
} from "react";

import { UI } from "../UI.js";
import { useDayPicker } from "../useDayPicker.js";

/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Nav(
  props: {
    /** Handler for the previous month button click. */
    onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
    /** Handler for the next month button click. */
    onNextClick?: MouseEventHandler<HTMLButtonElement>;
    /** The date of the previous month, if available. */
    previousMonth?: Date | undefined;
    /** The date of the next month, if available. */
    nextMonth?: Date | undefined;
  } & HTMLAttributes<HTMLElement>,
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
    labels: { labelPrevious, labelNext },
  } = useDayPicker();

  const handleNextClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (nextMonth) {
        onNextClick?.(e);
      }
    },
    [nextMonth, onNextClick],
  );

  const handlePreviousClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (previousMonth) {
        onPreviousClick?.(e);
      }
    },
    [previousMonth, onPreviousClick],
  );

  return (
    <nav {...navProps}>
      <components.PreviousMonthButton
        type="button"
        className={classNames[UI.PreviousMonthButton]}
        tabIndex={previousMonth ? undefined : -1}
        aria-disabled={previousMonth ? undefined : true}
        aria-label={labelPrevious(previousMonth)}
        onClick={handlePreviousClick}
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
        aria-disabled={nextMonth ? undefined : true}
        aria-label={labelNext(nextMonth)}
        onClick={handleNextClick}
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
