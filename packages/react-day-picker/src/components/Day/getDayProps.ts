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
  const { classNames, daysClassNames, daysStyles, onDayClick, styles } = props;

  let onClick;
  if (modifiers.interactive && onDayClick) {
    onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day, modifiers, e);
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
