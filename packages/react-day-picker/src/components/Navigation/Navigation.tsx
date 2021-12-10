import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

import { Button } from '../Button';

/** The props for the [[Navigation]] component. */
export interface NavigationProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** The previous month. */
  previousMonth?: Date;
  /** The next month. */
  nextMonth?: Date;
  /** Hide the previous button. */
  hidePrevious: boolean;
  /** Hide the next button. */
  hideNext: boolean;
  /** Event handler when the next button is clicked. */
  onNextClick: React.MouseEventHandler<HTMLButtonElement>;
  /** Event handler when the previous button is clicked. */
  onPreviousClick: React.MouseEventHandler<HTMLButtonElement>;
}

/** A component rendering the navigation buttons or the drop-downs. */
export function Navigation(props: NavigationProps): JSX.Element {
  const {
    dir,
    locale,
    classNames,
    styles,
    labels: { labelPrevious, labelNext },
    components: { IconRight, IconLeft }
  } = useDayPicker();
  let { onPreviousClick, onNextClick } = props;
  if (dir === 'rtl') {
    [onNextClick, onPreviousClick] = [onPreviousClick, onNextClick];
  }

  const { previousMonth, nextMonth } = props;

  const previousLabel = labelPrevious(previousMonth, { locale });
  const previousClassName = [
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(' ');

  const nextLabel = labelNext(nextMonth, { locale });
  const nextClassName = [
    classNames.nav_button,
    classNames.nav_button_next
  ].join(' ');

  if (!nextMonth && !previousMonth) {
    return <></>;
  }

  return (
    <div className={classNames.nav} style={styles.nav}>
      {!props.hidePrevious && (
        <Button
          aria-label={previousLabel}
          className={previousClassName}
          style={styles.nav_button_next}
          disabled={!previousMonth}
          onClick={dir === 'rtl' ? onNextClick : onPreviousClick}
        >
          {dir === 'rtl' ? (
            <IconRight
              className={classNames.nav_icon}
              style={styles.nav_icon}
            />
          ) : (
            <IconLeft className={classNames.nav_icon} style={styles.nav_icon} />
          )}
        </Button>
      )}
      {!props.hideNext && (
        <Button
          aria-label={nextLabel}
          className={nextClassName}
          style={styles.nav_button_next}
          disabled={!nextMonth}
          onClick={dir === 'rtl' ? onPreviousClick : onNextClick}
        >
          {dir === 'rtl' ? (
            <IconLeft className={classNames.nav_icon} style={styles.nav_icon} />
          ) : (
            <IconRight
              className={classNames.nav_icon}
              style={styles.nav_icon}
            />
          )}
        </Button>
      )}
    </div>
  );
}
