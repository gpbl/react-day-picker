import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from '../../components';
import { useDayPicker, useNavigation } from '../../hooks';
import { MonthChangeEventHandler } from '../../types';

/** Represent the props of the [[Caption]] component. */
export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** The index of the month being displayed (when `numberOfMonths` set can be greater than `0`). */
  displayIndex: number;
  /** When `numberOfMonths > 0`, whether the month is placed first. */
  isFirst: boolean;
  /** When `numberOfMonths > 0`, whether the month is placed last. */
  isLast: boolean;
  /**When `numberOfMonths > 0`, whether the month is placed in middle position. */
  isMiddle: boolean;
}

/**
 * Render the caption of a month, which includes title and navigation buttons.
 * The caption has a different layout when setting the `numberOfMonths` prop.
 */
export function Caption(props: CaptionProps): JSX.Element {
  const { displayMonth, isFirst, isLast } = props;

  const context = useDayPicker();
  const {
    classNames,
    numberOfMonths,
    disableNavigation,
    styles,
    captionLayout,
    onMonthChange,
    components: { CaptionLabel }
  } = context;

  const { previousMonth, nextMonth, setMonth } = useNavigation();

  const handlePreviousClick: React.MouseEventHandler = (e) => {
    if (!previousMonth) return;
    setMonth(previousMonth);
    onMonthChange?.(previousMonth);
  };

  const handleNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    setMonth(nextMonth);
    onMonthChange?.(nextMonth);
  };

  const handleMonthChange: MonthChangeEventHandler = (newMonth) => {
    setMonth(newMonth);
    onMonthChange?.(newMonth);
  };

  const captionLabel = <CaptionLabel displayMonth={displayMonth} />;

  return (
    <div className={classNames.caption} style={styles.caption}>
      {disableNavigation ? (
        captionLabel
      ) : (
        <>
          {captionLayout === 'dropdown' ? (
            <div
              className={classNames.caption_dropdowns}
              style={styles.caption_dropdowns}
            >
              <MonthsDropdown
                onChange={handleMonthChange}
                displayMonth={displayMonth}
              />
              <YearsDropdown
                onChange={handleMonthChange}
                displayMonth={displayMonth}
              />
            </div>
          ) : (
            <>
              <CaptionLabel displayMonth={displayMonth} />
              <Navigation
                displayMonth={displayMonth}
                hideNext={numberOfMonths > 1 && !isLast}
                hidePrevious={numberOfMonths > 1 && !isFirst}
                nextMonth={nextMonth}
                previousMonth={previousMonth}
                onPreviousClick={handlePreviousClick}
                onNextClick={handleNextClick}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
