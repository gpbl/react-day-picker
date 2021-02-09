import { format } from 'date-fns';
import { DayPickerProps, ModifiersStatus } from '../DayPicker';
import { DayHtmlProps } from './types';

/**
 * Return props for creating a [[Day]] component.
 */
export function getDayProps(
  day: Date,
  modifiers: ModifiersStatus,
  props: DayPickerProps
): DayHtmlProps {
  const {
    classNames,
    modifiersClassNames: daysClassNames,
    modifiersStyles: daysStyles,
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

  const containerProps = {
    tabIndex: modifiers.interactive ? 0 : undefined,
    role: modifiers.interactive ? 'button' : undefined,
    'aria-disabled': !modifiers.disabled || undefined,
    'aria-selected': modifiers.selected || undefined,
    disabled: Boolean(modifiers.disabled) || undefined,
    onClick,
    onKeyDown,
    style,
    className: className.join(' ')
  };

  const wrapperProps = {
    className: classNames?.dayWrapper,
    styles: styles?.dayWrapper,
    dateTime: format(day, 'yyyy-MM-dd')
  };

  return { containerProps, wrapperProps, modifiers };
}
