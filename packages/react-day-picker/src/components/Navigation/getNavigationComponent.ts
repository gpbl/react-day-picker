import { DayPickerProps } from 'types';

import { defaultLabels } from '../DayPicker/defaultLabels';
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
  prevButtonProps: Partial<JSX.IntrinsicElements['button']>;
  nextButtonProps: Partial<JSX.IntrinsicElements['button']>;
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

  const onNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };
  const prevAriaLabel =
    prevMonth &&
    (props.labelsFormatters?.navPrev(prevMonth, props) ??
      defaultLabels.navPrev(prevMonth, props));
  const nextAriaLabel =
    nextMonth &&
    (props.labelsFormatters?.navNext(nextMonth, props) ??
      defaultLabels.navNext(nextMonth, props));

  const prevButtonProps: JSX.IntrinsicElements['button'] = {
    className: classNames?.navPrev,
    style: styles?.navPrev,
    onClick: onPrevClick,
    disabled: !prevMonth,
    'aria-label': prevAriaLabel
  };

  const nextButtonProps: JSX.IntrinsicElements['button'] = {
    className: classNames?.navNext,
    style: styles?.navNext,
    onClick: onNextClick,
    disabled: !nextMonth,
    'aria-label': nextAriaLabel
  };

  return {
    nextMonth,
    prevMonth,
    rootProps,
    nextButtonProps,
    prevButtonProps
  };
}
