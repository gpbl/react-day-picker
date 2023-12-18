import type { PropsBase } from '../../../types';
import { defaultClassNames } from '../defaultClassNames';

/**
 * Return the default class names and any custom class names passed in through
 * props.
 */
export function getClassNames(customClassNames: PropsBase['classNames']) {
  return {
    ...defaultClassNames,
    ...customClassNames
  };
}
