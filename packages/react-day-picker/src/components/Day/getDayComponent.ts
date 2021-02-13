import { format } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from 'types';
import { getModifiers } from './utils/getModifiers';

export function getDayComponent(
  day: Date,
  currentMonth: Date,
  props: DayPickerProps
): {
  modifiers: ModifiersStatus;
  rootProps: Partial<JSX.IntrinsicElements['span']>;
  timeProps: Partial<JSX.IntrinsicElements['time']>;
} {
  const modifiers = getModifiers(day, currentMonth, props);

  const {
    classNames,
    modifiersClassNames,
    modifiersStyles,
    onDayClick,
    styles
  } = props;

  const onClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    if (!onDayClick) return;
    e.stopPropagation();
    e.preventDefault();
    onDayClick(day, modifiers, e);
  };
  const onKeyDown: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      if (!onDayClick) return;
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day, modifiers, e);
    }
    if (props.onDayKeyDown) {
      props.onDayKeyDown(day, modifiers, e);
    }
  };
  const onKeyUp: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayKeyUp) return;
    props.onDayKeyUp(day, modifiers, e);
  };
  const onKeyPress: React.KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayKeyPress) return;
    props.onDayKeyPress(day, modifiers, e);
  };
  const onMouseEnter: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayMouseEnter) return;
    props.onDayMouseEnter(day, modifiers, e);
  };
  const onMouseLeave: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayMouseLeave) return;
    props.onDayMouseLeave(day, modifiers, e);
  };
  const onTouchCancel: React.TouchEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayTouchCancel) return;
    props.onDayTouchCancel(day, modifiers, e);
  };
  const onTouchEnd: React.TouchEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayTouchEnd) return;
    props.onDayTouchEnd(day, modifiers, e);
  };
  const onTouchMove: React.TouchEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayTouchMove) return;
    props.onDayTouchMove(day, modifiers, e);
  };
  const onTouchStart: React.TouchEventHandler<HTMLSpanElement> = (e) => {
    if (!props.onDayTouchStart) return;
    props.onDayTouchStart(day, modifiers, e);
  };

  let style = { ...styles?.day };
  if (styles) {
    // Apply the custom inline-styles
    Object.keys(modifiers).forEach((modifier) => {
      style = {
        ...style,
        ...styles[modifier]
      };
    });
  }
  if (modifiersStyles) {
    // Apply the styles for the modifier
    Object.keys(modifiers).forEach((modifier) => {
      style = {
        ...style,
        ...modifiersStyles[modifier]
      };
    });
  }

  const className: (string | undefined)[] = [];
  if (classNames?.day) {
    className.push(classNames.day);
  }
  Object.keys(modifiers)
    .filter((modifier) => Boolean(modifiers[modifier]))
    .forEach((modifier) => {
      if (classNames?.[modifier]) {
        className.push(classNames[modifier]);
      }
      if (modifiersClassNames?.[modifier]) {
        className.push(modifiersClassNames[modifier]);
      }
    });

  const rootProps: Partial<JSX.IntrinsicElements['span']> = {
    tabIndex: modifiers.interactive ? 0 : undefined,
    role: modifiers.interactive ? 'button' : undefined,
    'aria-disabled': modifiers.disabled,
    'aria-selected': modifiers.selected,
    style,
    className: className.join(' '),
    onClick,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onMouseEnter,
    onMouseLeave,
    onTouchCancel,
    onTouchEnd,
    onTouchMove,
    onTouchStart
  };

  const wrapperProps: JSX.IntrinsicElements['time'] = {
    className: classNames?.dayWrapper,
    style: styles?.dayWrapper,
    dateTime: format(day, 'yyyy-MM-dd')
  };

  return { modifiers, rootProps, timeProps: wrapperProps };
}
