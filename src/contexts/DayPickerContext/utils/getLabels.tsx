import * as defaultLabels from '../../../labels';
import { PropsBase, type Labels } from '../../../types';

/** Return the labels from the props. */
export function getLabels(customLabels: PropsBase['labels']): Labels {
  return { ...defaultLabels, ...customLabels };
}
