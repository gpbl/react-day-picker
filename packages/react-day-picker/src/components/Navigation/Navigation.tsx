import * as React from 'react';

import { IconNext, IconPrev } from '../../components';
import { useNavigation, useProps } from '../../hooks';
import { UIElement } from '../../types';

export interface NavigationProps {
  /** The month where the navigation is displayed. */
  displayMonth: Date;
}
/** Render the Navigation bar with prev / next buttons */
export function Navigation(props: NavigationProps): JSX.Element {
  const { prevMonth, nextMonth } = useNavigation();
  const { dir, locale, classNames, styles, onMonthChange, labels } = useProps();

  const onPrevClick: React.MouseEventHandler = (e) => {
    if (!prevMonth) return;
    onMonthChange?.(prevMonth, e);
  };

  const onNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };

  const prevLabel = prevMonth && labels.prevLabel(prevMonth, { locale });
  const prevButton = (
    <button
      key="prev"
      aria-label={prevLabel}
      className={[
        classNames[UIElement.NavButton],
        classNames[UIElement.NavButtonPrev]
      ].join(' ')}
      disabled={!prevMonth}
      onClick={dir === 'rtl' ? onNextClick : onPrevClick}
      style={styles?.[UIElement.NavButtonPrev]}
    >
      <IconPrev className={classNames[UIElement.NavIcon]} />
    </button>
  );

  const nextLabel = nextMonth && labels.nextLabel(nextMonth, { locale });
  const nextButton = (
    <button
      key="next"
      aria-label={nextLabel}
      className={[
        classNames[UIElement.NavButton],
        classNames[UIElement.NavButtonNext]
      ].join(' ')}
      disabled={!nextMonth}
      onClick={dir === 'rtl' ? onPrevClick : onNextClick}
      style={styles?.[UIElement.NavButtonNext]}
    >
      <IconNext className={classNames[UIElement.NavIcon]} />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dir === 'rtl') buttons = buttons.reverse();
  return (
    <span className={classNames[UIElement.Nav]} style={styles?.[UIElement.Nav]}>
      {buttons}
    </span>
  );
}
