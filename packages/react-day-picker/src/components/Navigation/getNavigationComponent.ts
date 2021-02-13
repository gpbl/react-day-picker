import { DayPickerProps } from 'types';

import { getPrevNextMonths } from './utils/getPrevNextMonths';

/**
 * Return the props to apply to the elements of the [[Navigation]] component.
 */
export function getNavigationComponent(
  dayPickerProps: Pick<
    DayPickerProps,
    'classNames' | 'styles' | 'onMonthChange'
  >
): {
  nextMonth: Date | undefined;
  prevMonth: Date | undefined;
  rootProps: Pick<JSX.IntrinsicElements['div'], 'className' | 'style'>;
  prevProps: Pick<
    JSX.IntrinsicElements['button'],
    'className' | 'style' | 'onClick' | 'disabled'
  >;
  nextProps: Pick<
    JSX.IntrinsicElements['button'],
    'className' | 'style' | 'onClick' | 'disabled'
  >;
} {
  const { classNames, styles, onMonthChange } = dayPickerProps;
  const [prevMonth, nextMonth] = getPrevNextMonths(dayPickerProps);

  const rootProps: JSX.IntrinsicElements['div'] = {
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
  const nextProps: JSX.IntrinsicElements['button'] = {
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
