import {
  MatchingModifiers,
  DayPickerProps,
  DayMatchModifier
} from "../DayPicker";
import { DayHtmlProps } from "./types";

/**
 * Return props for creating a [[Day]] component.
 *
 * #### Usage
 *
 * - Use this helper when swizzling the [[Day]] via the
 *   [[DayPickerProps.components]] prop.
 * - This component is a bit complex to swizzle: see the source of the
 *   [[Day]] component for an example.
 *
 *
 */
export function getDayProps(
  day: Date,
  modifiers: MatchingModifiers,
  props: DayPickerProps
): DayHtmlProps {
  const {
    onDayClick,
    styles,
    modifiersStyles,
    classNames,
    modifiersClassNames
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
    Object.keys(modifiers).forEach(modifier => {
      style = {
        ...style,
        ...styles[modifier]
      };
    });
  }
  if (modifiersStyles) {
    // Apply the styles for the modifier
    Object.keys(modifiers).forEach(modifier => {
      style = {
        ...style,
        ...modifiersStyles[modifier]
      };
    });
  }

  const className: (string | undefined)[] = [];
  if (classNames && classNames.day) {
    className.push(classNames.day);
    if (modifiersClassNames) {
      Object.keys(modifiers)
        .filter(modifier => !!modifiers[modifier])
        .forEach(modifier => {
          if (modifier && classNames[modifier]) {
            className.push(classNames[modifier]);
          }
          if (modifiersClassNames && modifiersClassNames[modifier]) {
            className.push(modifiersClassNames[modifier]);
          }
        });
    }
  }

  const dataProps: { [key: string]: DayMatchModifier } = {};
  Object.entries(modifiers)
    .filter(value => Boolean(value))
    .forEach(([modifier, value]) => {
      dataProps[`data-rdp-${modifier}`] = value;
    });

  const containerProps = {
    "aria-disabled": !modifiers.interactive || undefined,
    disabled: Boolean(modifiers.disabled) || undefined,
    onClick,
    style,
    className: className.join(" "),
    ...dataProps
  };
  const wrapperProps = {
    className: classNames?.dayWrapper,
    styles: styles?.dayWrapper
  };

  return { containerProps, wrapperProps };
}
