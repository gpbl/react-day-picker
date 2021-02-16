import { DayPickerContext, IconNext, IconPrev } from '../../components';
import * as React from 'react';

export interface NavigationProps {
  /** The month where the navigation is displayed. */
  displayMonth: Date;
}

export function Navigation(props: NavigationProps): JSX.Element {
  const context = React.useContext(DayPickerContext);
  const { dir, locale, classNames, styles, onMonthChange } = context;
  const { labels } = context;
  const { prevMonth, nextMonth } = context;

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
      className={[classNames.NavButton, classNames.NavButtonPrev].join(' ')}
      disabled={!prevMonth}
      onClick={dir === 'rtl' ? onNextClick : onPrevClick}
      style={styles?.NavButtonPrev}
    >
      <IconPrev className={classNames.NavButtonPrev} />
    </button>
  );

  const nextLabel = nextMonth && labels.nextLabel(nextMonth, { locale });
  const nextButton = (
    <button
      key="next"
      aria-label={nextLabel}
      className={[classNames.NavButton, classNames.NavButtonNext].join(' ')}
      disabled={!nextMonth}
      onClick={dir === 'rtl' ? onPrevClick : onNextClick}
      style={styles?.NavButtonNext}
    >
      <IconNext className={classNames.NavButtonNext} />
    </button>
  );

  let buttons = [prevButton, nextButton];
  if (dir === 'rtl') buttons = buttons.reverse();
  return (
    <span className={classNames.Nav} style={styles?.Nav}>
      {buttons}
    </span>
  );
}
