import React from 'react';

import { useDayPicker } from '../../hooks';

/** The props for the [[Navigation]] component. */
export interface NavigationProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
  /** Disable the previous button. */
  disablePrevious: boolean;
  /** Disable the next button. */
  disableNext: boolean;
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
    components: { IconNext, IconPrevious }
  } = useDayPicker();
  let { onPreviousClick, onNextClick } = props;
  if (dir === 'rtl') {
    [onNextClick, onPreviousClick] = [onPreviousClick, onNextClick];
  }
  const previousLabel = labelPrevious(props.displayMonth, { locale });
  const previousClassName = [
    classNames.button_reset,
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(' ');

  const nextLabel = labelNext(props.displayMonth, { locale });
  const nextClassName = [
    classNames.button_reset,
    classNames.nav_button,
    classNames.nav_button_previous
  ].join(' ');

  const previousButton = (
    <button
      key="prev"
      aria-label={previousLabel}
      className={previousClassName}
      style={styles.nav_button_previous}
      disabled={props.disablePrevious}
      onClick={onPreviousClick}
    >
      <IconPrevious className={classNames.nav_icon} style={styles.nav_icon} />
    </button>
  );

  const nextButton = (
    <button
      key="next"
      aria-label={nextLabel}
      className={nextClassName}
      disabled={props.disableNext}
      onClick={onNextClick}
      style={styles.nav_button_next}
    >
      <IconNext className={classNames.nav_icon} style={styles.nav_icon} />
    </button>
  );
  if (props.disableNext && props.disablePrevious) {
    return <></>;
  }
  return (
    <div className={classNames.nav} style={styles.nav}>
      {!props.hidePrevious && previousButton}
      {!props.hideNext && nextButton}
    </div>
  );
}
