import * as React from 'react';

import { isSameMonth } from 'date-fns';

import {
  IconNext,
  IconPrev,
  MonthsDropdown,
  YearsDropdown
} from '../../components';
import { useNavigation } from '../../hooks';
import { useProps } from '../../hooks/useProps';
import { UIElement } from '../../types';

export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

export function Caption(props: CaptionProps): JSX.Element {
  const { displayMonth } = props;
  const {
    dir,
    classNames,
    styles,
    navigationType,
    locale,
    numberOfMonths,
    onMonthChange,
    labels,
    formatters: { formatCaption }
  } = useProps();
  const { displayMonths, prevMonth, nextMonth } = useNavigation();

  const onPrevClick: React.MouseEventHandler = (e) => {
    if (!prevMonth) return;
    onMonthChange?.(prevMonth, e);
  };

  const onNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };

  const prevButton = (
    <button
      key="prev"
      aria-label={prevMonth && labels.prevLabel(prevMonth, { locale })}
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

  const nextButton = (
    <button
      key="next"
      aria-label={nextMonth && labels.nextLabel(nextMonth, { locale })}
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

  const caption = (
    <div
      key="caption"
      className={classNames[UIElement.DropdownLabel]}
      aria-live="polite"
    >
      {formatCaption(displayMonth, { locale })}
    </div>
  );

  let buttons = [prevButton, nextButton];

  const isFirstOfMany =
    numberOfMonths > 1 && isSameMonth(displayMonths[0], displayMonth);
  const isLastOfMany =
    numberOfMonths > 1 &&
    isSameMonth(displayMonths[displayMonths.length - 1], displayMonth);
  const isBetween = numberOfMonths > 1 && !isFirstOfMany && !isLastOfMany;

  if (isFirstOfMany) buttons = [prevButton];
  if (isLastOfMany) buttons = [nextButton];
  if (isBetween) buttons = [];

  if (dir === 'rtl') buttons = buttons.reverse();

  const nav = (
    <span
      key="nav"
      className={classNames[UIElement.Nav]}
      style={styles?.[UIElement.Nav]}
    >
      {buttons}
    </span>
  );

  const rootClassName = [classNames[UIElement.Caption]];
  if (isFirstOfMany) rootClassName.push(classNames[UIElement.CaptionFirst]);
  if (isLastOfMany) rootClassName.push(classNames[UIElement.CaptionLast]);
  if (isBetween) rootClassName.push(classNames[UIElement.CaptionBetween]);

  return (
    <div className={rootClassName.join(' ')}>
      {navigationType === 'dropdown' && (
        <div className={classNames[UIElement.DropdownsContainer]}>
          <MonthsDropdown displayMonth={displayMonth} />
          <YearsDropdown displayMonth={displayMonth} />
        </div>
      )}
      {navigationType === 'buttons' && numberOfMonths === 1 && [caption, nav]}
      {navigationType === 'buttons' && isFirstOfMany && [nav, caption]}
      {navigationType === 'buttons' && isLastOfMany && [caption, nav]}
      {navigationType === 'buttons' && isBetween && caption}
    </div>
  );
}
