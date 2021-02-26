import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from '../../components';
import { useDayPicker, useNavigation } from '../../hooks';
import { MonthChangeEventHandler, UIElement as UI } from '../../types';
import { CaptionLabel } from '../CaptionLabel/CaptionLabel';

/** Represent the props of the [[Caption]] component. */
export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** The index of the month being displayed (when `numberOfMonths` set). */
  displayIndex: number;
  /** Whether the caption belongs to the first table (when `numberOfMonths` set). */
  isFirst: boolean;
  /** Whether the caption belongs to the last table (when `numberOfMonths` set). */
  isLast: boolean;
  /** Whether the caption belongs to a table between others (when `numberOfMonths` set).. */
  isBetween: boolean;
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
    onMonthChange
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
    <div className={classNames[UI.Caption]} style={styles[UI.Caption]}>
      {disableNavigation ? (
        captionLabel
      ) : (
        <>
          {captionLayout === 'dropdown' ? (
            <div
              className={classNames[UI.CaptionDropdowns]}
              style={styles[UI.CaptionDropdowns]}
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
                disableNext={!nextMonth}
                disablePrevious={!previousMonth}
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
