import React from 'react';

import { useDayPicker } from '../../hooks';
import { UIElement as UI } from '../../types';
import { IconNext } from '../IconNext';
import { IconPrev } from '../IconPrev';

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

/** A component rendering the navigation buttons */
export function Navigation(props: NavigationProps): JSX.Element {
  const {
    dir,
    locale,
    classNames,
    styles,
    labels: { labelPrevious, labelNext }
  } = useDayPicker();
  let { onPreviousClick, onNextClick } = props;
  if (dir === 'rtl') {
    [onNextClick, onPreviousClick] = [onPreviousClick, onNextClick];
  }
  const previousLabel = labelPrevious(props.displayMonth, { locale });
  const previousClassName = [
    classNames[UI.NavButton],
    classNames[UI.NavButtonPrev]
  ].join(' ');

  const nextLabel = labelNext(props.displayMonth, { locale });
  const nextClassName = [
    classNames[UI.NavButton],
    classNames[UI.NavButtonPrev]
  ].join(' ');

  const previousButton = (
    <button
      key="prev"
      aria-label={previousLabel}
      className={previousClassName}
      style={styles[UI.NavButtonPrev]}
      disabled={props.disablePrevious}
      onClick={onPreviousClick}
    >
      <IconPrev className={classNames[UI.NavIcon]} style={styles[UI.NavIcon]} />
    </button>
  );

  const nextButton = (
    <button
      key="next"
      aria-label={nextLabel}
      className={nextClassName}
      disabled={props.disableNext}
      onClick={onNextClick}
      style={styles[UI.NavButtonNext]}
    >
      <IconNext className={classNames[UI.NavIcon]} style={styles[UI.NavIcon]} />
    </button>
  );
  if (props.disableNext && props.disablePrevious) {
    return <></>;
  }
  return (
    <div className={classNames[UI.Nav]} style={styles[UI.Nav]}>
      {!props.hidePrevious && previousButton}
      {!props.hideNext && nextButton}
    </div>
  );
}
