import * as React from "react";

import { getDayProps } from "./getDayProps";
import { MatchingModifiers, DayPickerProps } from "../DayPicker";

export interface DayProps {
  day: Date;
  modifiers: MatchingModifiers;
  dayPickerProps: DayPickerProps;
}

export interface DayHtmlProps {
  containerProps: {
    "aria-disabled"?: boolean;
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

export const Day: React.FC<DayProps> = props => {
  const { day, modifiers, dayPickerProps } = props;
  const { locale, formatDay } = dayPickerProps;

  const { containerProps, wrapperProps } = getDayProps(
    day,
    modifiers,
    dayPickerProps
  );

  if (modifiers && modifiers.hidden) {
    return <span />;
  }

  const Component = modifiers.interactive ? "button" : "span";

  return (
    <Component {...containerProps}>
      <span {...wrapperProps}>{formatDay(day, { locale })}</span>
    </Component>
  );
};
