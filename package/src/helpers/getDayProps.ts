/**
 * Return the props for the Day component.
 */
export function getDayProps(
  day: Date,
  modifiers: ReactDayPicker.MatchingModifiers,
  props: ReactDayPicker.DayPickerProps
): ReactDayPicker.DayHtmlProps {
  const {
    onDayClick,
    styles,
    modifiersStyles,
    classNames,
    modifiersClassNames,
  } = props;

  let onClick;
  if (modifiers.interactive && onDayClick) {
    onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day, modifiers, e);
    };
  }

  let style = { ...styles.day };
  if (styles) {
    // Apply the custom inline-styles
    Object.keys(modifiers).forEach(modifier => {
      style = {
        ...style,
        ...styles[modifier],
      };
    });
  }
  if (modifiersStyles) {
    // Apply the styles for the modifier
    Object.keys(modifiers).forEach(modifier => {
      style = {
        ...style,
        ...modifiersStyles[modifier],
      };
    });
  }

  const className = [classNames.day] || [];
  if (modifiersClassNames || classNames) {
    Object.keys(modifiers)
      .filter(modifier => !!modifiers[modifier])
      .forEach(modifier => {
        if (classNames[modifier]) {
          className.push(classNames[modifier]);
        }
        if (modifiersClassNames && modifiersClassNames[modifier]) {
          className.push(modifiersClassNames[modifier]);
        }
      });
  }

  const dataProps: { [key: string]: ReactDayPicker.ModifierValueType } = {};
  Object.entries(modifiers)
    .filter(value => Boolean(value))
    .forEach(([modifier, value]) => {
      dataProps[`data-rdp-${modifier}`] = value;
    });

  const containerProps = {
    'aria-disabled': !modifiers.interactive || undefined,
    disabled: modifiers.disabled || undefined,
    onClick,
    style,
    className: className.join(' '),
    ...dataProps,
  };
  const wrapperProps = {
    className: classNames.dayWrapper,
    styles: styles.dayWrapper,
  };

  return { containerProps, wrapperProps };
}
