import * as defaultLabels from '../../../labels';
import type { Labels } from '../../../types/labels';
import type { PropsBase } from '../../../types/props';

/** Return the labels from the props. */
export function getLabels(customLabels: PropsBase['labels']): Labels {
  return { ...defaultLabels, ...customLabels };
}
