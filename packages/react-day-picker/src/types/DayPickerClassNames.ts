import { UIElement } from './UIElement';

/** Represent the class names used for each [[UIElement]]. */
export type DayPickerClassNames = {
  [element in keyof UIElement]?: string;
};
