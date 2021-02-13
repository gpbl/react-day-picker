import { defaultProps } from 'components/DayPicker/defaultProps';
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
  rootProps: JSX.IntrinsicElements['div'];
  prevButtonProps: JSX.IntrinsicElements['button'];
  nextButtonProps: JSX.IntrinsicElements['button'];
} {
  const { classNames, styles, onMonthChange } = props;
  const [prevMonth, nextMonth] = getPrevNextMonths(props);

  const rootProps: JSX.IntrinsicElements['div'] = {
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

  // TODO: create a default factory
  const prevAriaLabel =
    prevMonth &&
    (props.ariaLabels?.navPrev(prevMonth, props) ??
      defaultLabels.navPrev(prevMonth, props));
  const nextAriaLabel =
    nextMonth &&
    (props.ariaLabels?.navNext(nextMonth, props) ??
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
