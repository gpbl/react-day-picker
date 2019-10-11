import { ModifierValues } from '../../types/Modifiers';
import { DayPickerProps } from '../../types/DayPickerProps';

interface PreparedDay {
  Container: 'button' | 'span';
  containerProps: {
    'aria-disabled'?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
  };
  wrapperProps: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export function prepareDay(
  day: Date,
  modifiers: ModifierValues,
  props: DayPickerProps
): PreparedDay {
  const {
    onDayClick,
    styles,
    modifiersStyles,
    classNames,
    modifiersClassNames,
  } = props;
  const Container = modifiers.interactive ? 'button' : 'span';

  let onClick;
  if (modifiers.interactive && onDayClick) {
    onClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      e.preventDefault();
      onDayClick(day, modifiers, e);
    };
  }

  let style = { ...styles.day };
  if (modifiersStyles) {
    Object.keys(modifiers).forEach(modifier => {
      if (modifiersStyles[modifier]) {
        style = {
          ...style,
          ...modifiersStyles[modifier],
        };
      }
    });
  }

  const className = [classNames.day] || [];
  if (modifiersClassNames) {
    Object.keys(modifiers)
      // Pick classnames only for modifiers having a truthy value
      .filter(modifier => Boolean(modifiers[modifier]))
      .forEach(modifier => {
        if (modifiersClassNames[modifier]) {
          className.push(modifiersClassNames[modifier]);
        }
      });
  }

  const dataProps = {};
  Object.entries(modifiers)
    .filter(value => Boolean(value))
    .forEach(
      ([modifier, value]) => (dataProps[`data-rdp-${modifier}`] = value)
    );

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

  return { Container, containerProps, wrapperProps };
}
