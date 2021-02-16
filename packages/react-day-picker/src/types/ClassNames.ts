import { UIElement } from './UIElement';

/** Represent the class names used for each [[UIElement]]. */
export type ClassNames = {
  [element in keyof UIElement]?: string;
};
