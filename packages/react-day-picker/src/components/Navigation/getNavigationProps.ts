import { DayPickerProps } from '../DayPicker';
import { NavigationButtonProps } from './types/NavigationButtonProps';
import { NavigationContainerProps } from './types/NavigationContainerProps';
import { getNavigation } from './utils/getNavigation';

/**
 * Return the props to apply to the elements of the [[Navigation]] component.
 */
export function getNavigationProps(
  dayPickerProps: DayPickerProps
): {
  containerProps: NavigationContainerProps;
  prevProps: NavigationButtonProps;
  nextProps: NavigationButtonProps;
} {
  const { classNames, styles, onMonthChange } = dayPickerProps;
  const { nextMonth, prevMonth } = getNavigation(dayPickerProps);

  const containerProps: NavigationContainerProps = {
    className: classNames?.nav,
    style: styles?.nav
  };

  const onPrevClick: React.MouseEventHandler = (e) => {
    if (!prevMonth) return;
    onMonthChange?.(prevMonth, e);
  };
  const prevProps: NavigationButtonProps = {
    className: classNames?.navPrev,
    style: styles?.navPrev,
    onClick: onPrevClick,
    disabled: !prevMonth
  };

  const onNextClick: React.MouseEventHandler = (e) => {
    if (!nextMonth) return;
    onMonthChange?.(nextMonth, e);
  };
  const nextProps: NavigationButtonProps = {
    className: classNames?.navNext,
    style: styles?.navNext,
    onClick: onNextClick,
    disabled: !nextMonth
  };

  return {
    containerProps,
    nextProps,
    prevProps
  };
}
