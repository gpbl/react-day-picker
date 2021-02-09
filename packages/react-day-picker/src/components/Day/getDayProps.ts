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
    styles,
    locale,
    formatDay
  } = props;

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

  const containerProps = {
    'aria-disabled': !modifiers.interactive || undefined,
    'aria-selected': modifiers.selected || undefined,
    'aria-label': formatDay?.(day, { locale }), // TODO: improve ARIA label using a formatDayLabel
    disabled: Boolean(modifiers.disabled) || undefined,
    onClick,
    style,
    className: className.join(' ')
    // ...dataTagProps
  };
  const wrapperProps = {
    className: classNames?.dayWrapper,
    styles: styles?.dayWrapper
  };

  return { containerProps, wrapperProps, modifiers };
}
