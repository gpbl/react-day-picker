import React from "react";

import * as defaultLabels from "../labels";
import type { Labels, PropsBase } from "../types";

/** Return the labels from the props. */
export function getLabels(customLabels: PropsBase["labels"]): Labels {
  return { ...defaultLabels, ...customLabels };
}
