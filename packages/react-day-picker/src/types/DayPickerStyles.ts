import { UIElement } from './UIElement';

export type DayPickerStyles = {
  [element in keyof UIElement]?: React.CSSProperties;
};
