import { DayPickerProps } from 'types';

import { getPrevNextMonths } from './utils/getPrevNextMonths';

/**
 * Return the props to apply to the elements of the [[Navigation]] component.
 */
export function getNavigationComponent(
  props: DayPickerProps
): {
  nextMonth: Date | undefined;
  prevMonth: Date | undefined;
  rootProps: Partial<JSX.IntrinsicElements['div']>;
  prevProps: Partial<JSX.IntrinsicElements['button']>;
  nextProps: Partial<JSX.IntrinsicElements['button']>;
} {
  const { classNames, styles, onMonthChange } = props;
  const [prevMonth, nextMonth] = getPrevNextMonths(props);

  const rootProps: Partial<JSX.IntrinsicElements['div']> = {
    className: classNames?.nav,
    style: styles?.nav
  };

  const onPrevClick: React.MouseEventHandler = (e) => {
    if (!prevMonth) return;
    onMonthChange?.(prevMonth, e);
  };
  const prevProps = {
    className: classNames?.navPrev,
    style: styles?.navPrev,
    onClick: onPrevClick,
    disabled: !prevMonth
  };

  const onNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };
  const nextProps: Partial<JSX.IntrinsicElements['button']> = {
    className: classNames?.navNext,
    style: styles?.navNext,
    onClick: onNextClick,
    disabled: !nextMonth
  };

  return {
    nextMonth,
    prevMonth,
    rootProps,
    nextProps,
    prevProps
  };
}
