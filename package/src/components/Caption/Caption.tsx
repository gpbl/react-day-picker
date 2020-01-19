import * as React from "react";
import { getCaptionProps } from "./getCaptionProps";
import { DayPickerProps } from "../DayPicker";

export interface CaptionProps {
  month: Date;
  dayPickerProps: DayPickerProps;
}

export interface CaptionHtmlProps {
  containerProps: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export const Caption: React.FC<CaptionProps> = ({ month, dayPickerProps }) => {
  const { containerProps } = getCaptionProps(dayPickerProps);
  const { locale } = dayPickerProps;
  return (
    <caption {...containerProps}>
      {dayPickerProps.formatCaption(month, { locale })}
    </caption>
  );
};
