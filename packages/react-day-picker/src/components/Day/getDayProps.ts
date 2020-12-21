import {
  DayPickerProps,
  DayMatchModifier,
  MatchingModifiers
} from '../DayPicker';

import { DayHtmlProps } from './types';

/**
 * Return props for creating a [[Day]] component.
 */
export function getDayProps(
  day: Date,
  modifiers: MatchingModifiers,
  props: DayPickerProps
): DayHtmlProps {
  const {
    classNames,
    daysClassNames,
    daysStyles,
    onDayClick,
    onDayMouseEnter,
    onDayMouseLeave,
    onDayKeyDown,
    onDayKeyUp,
    onDayKeyPress,
    onDayTouchEvent,
    styles
  } = props;

  let onClick;
  let onMouseEnter;
  let onMouseLeave;
  let onKeyDown;
  let onKeyUp;
  let onKeyPress;
  let onTouchEvent;
  if (onDayClick) {
    onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day, modifiers, e);
    };
  }
  if (onDayMouseEnter) {
    onMouseEnter = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayMouseEnter(day, modifiers, e);
    };
  }
  if (onDayMouseLeave) {
    onMouseEnter = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayMouseLeave(day, modifiers, e);
    };
  }
  if (onDayKeyDown) {
    onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayKeyDown(day, modifiers, e);
    };
  }
  if (onDayKeyUp) {
    onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayKeyUp(day, modifiers, e);
    };
  }
  if (onDayKeyPress) {
    onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayKeyPress(day, modifiers, e);
    };
  }
  if (onDayTouchEvent) {
    onTouchEvent = (e: React.TouchEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayTouchEvent(day, modifiers, e);
    };
  }

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
  if (daysStyles) {
    // Apply the styles for the modifier
    Object.keys(modifiers).forEach((modifier) => {
      style = {
        ...style,
        ...daysStyles[modifier]
      };
    });
  }

  const className: (string | undefined)[] = [];
  if (classNames && classNames.day) {
    className.push(classNames.day);
    if (daysClassNames) {
      Object.keys(modifiers)
        .filter((modifier) => !!modifiers[modifier])
        .forEach((modifier) => {
          if (modifier && classNames[modifier]) {
            className.push(classNames[modifier]);
          }
          if (daysClassNames && daysClassNames[modifier]) {
            className.push(daysClassNames[modifier]);
          }
        });
    }
  }

  const dataProps: { [key: string]: DayMatchModifier } = {};
  Object.entries(modifiers)
    .filter((value) => Boolean(value))
    .forEach(([modifier, value]) => {
      dataProps[`data-rdp-${modifier}`] = value;
    });

  const containerProps = {
    'aria-disabled': !modifiers.interactive || undefined,
    'aria-hidden': !modifiers.hidden || undefined,
    disabled: Boolean(modifiers.disabled) || undefined,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onTouchEvent,
    style,
    className: className.join(' '),
    ...dataProps
  };
  const wrapperProps = {
    className: classNames?.dayWrapper,
    styles: styles?.dayWrapper
  };

  return { containerProps, wrapperProps, modifiers };
}
