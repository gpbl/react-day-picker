import { DayPickerProps } from '../../types';

import { defaultLabels } from '../DayPicker';
import { getPrevNextMonths } from './utils/getPrevNextMonths';

/**
 * Return the values for creating the [[Navigation]] components.
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
    className: classNames?.Nav,
    style: styles?.Nav
  };

  const onPrevClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!prevMonth) return;
    onMonthChange?.(prevMonth, e);
  };

  const onNextClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };
  const prevAriaLabel =
    prevMonth &&
    (props.labelsFormatters?.NavButtonPrev(prevMonth, props) ??
      defaultLabels.NavButtonPrev(prevMonth, props));
  const nextAriaLabel =
    nextMonth &&
    (props.labelsFormatters?.NavButtonNext(nextMonth, props) ??
      defaultLabels.NavButtonNext(nextMonth, props));

  const buttonClassName = classNames?.NavButton ?? '';

  const prevButtonProps: JSX.IntrinsicElements['button'] = {
    className: [buttonClassName, classNames?.NavButtonNext ?? ''].join(' '),
    style: styles?.NavButtonPrev,
    onClick: onPrevClick,
    disabled: !prevMonth,
    'aria-label': prevAriaLabel
  };

  const nextButtonProps: JSX.IntrinsicElements['button'] = {
    className: [buttonClassName, classNames?.NavButtonNext ?? ''].join(' '),
    style: styles?.NavButtonNext,
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
