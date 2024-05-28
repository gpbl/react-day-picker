import type { PropsBase } from "../types";

import { getDefaultClassNames } from "./getDefaultClassNames";

/**
 * Return the default class names with any custom class names passed in through
 * props.
 */
export function getClassNames(customClassNames: PropsBase["classNames"]) {
  return {
    ...getDefaultClassNames(),
    ...customClassNames
  };
}
