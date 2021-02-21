import * as React from 'react';

import {
  IconNext,
  IconPrev,
  MonthsDropdown,
  YearsDropdown
} from '../../components';
import { useDayPicker, useNavigation } from '../../hooks';
import { UIElement as UI } from '../../types';

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
  const { displayMonth, isFirst, isLast, isBetween } = props;
  const {
    dir,
    classNames,
    styles,
    captionLayout,
    locale,
    numberOfMonths,
    onMonthChange,
    labels,
    formatters: { formatCaption },
    disableNavigation
  } = useDayPicker();

  const { prevMonth, nextMonth } = useNavigation();

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
      className={[classNames[UI.NavButton], classNames[UI.NavButtonPrev]].join(
        ' '
      )}
      disabled={!prevMonth}
      onClick={dir === 'rtl' ? onNextClick : onPrevClick}
      style={styles?.[UI.NavButtonPrev]}
    >
      <IconPrev
        className={classNames[UI.NavIcon]}
        style={styles?.[UI.NavIcon]}
      />
    </button>
  );

  const nextButton = (
    <button
      key="next"
      aria-label={nextMonth && labels.nextLabel(nextMonth, { locale })}
      className={[classNames[UI.NavButton], classNames[UI.NavButtonNext]].join(
        ' '
      )}
      disabled={!nextMonth}
      onClick={dir === 'rtl' ? onPrevClick : onNextClick}
      style={styles?.[UI.NavButtonNext]}
    >
      <IconNext
        className={classNames[UI.NavIcon]}
        style={styles?.[UI.NavIcon]}
      />
    </button>
  );

  const caption = (
    <div
      key="caption"
      className={classNames[UI.CaptionLabel]}
      aria-live="polite"
    >
      {formatCaption(displayMonth, { locale })}
    </div>
  );

  let buttons = [prevButton, nextButton];
  if (dir === 'rtl') buttons.reverse();

  if (isFirst) buttons = [prevButton]; // show only the prev button"
  if (isLast) buttons = [nextButton]; // show only the next button"
  if (isBetween) buttons = []; // do not show buttons at all

  const nav = (
    <span key="nav" className={classNames[UI.Nav]} style={styles?.[UI.Nav]}>
      {buttons}
    </span>
  );

  return (
    <div className={classNames[UI.Caption]} style={styles?.[UI.Caption]}>
      {disableNavigation ? (
        caption
      ) : (
        <>
          {captionLayout === 'dropdown' && (
            <div
              className={classNames[UI.CaptionDropdowns]}
              style={styles?.[UI.CaptionDropdowns]}
            >
              <MonthsDropdown displayMonth={displayMonth} />
              <YearsDropdown displayMonth={displayMonth} />
            </div>
          )}
          {captionLayout === 'buttons' &&
            numberOfMonths === 1 && [caption, nav]}
          {captionLayout === 'buttons' && isFirst && [nav, caption]}
          {captionLayout === 'buttons' && isLast && [caption, nav]}
          {captionLayout === 'buttons' && isBetween && caption}
        </>
      )}
    </div>
  );
}
