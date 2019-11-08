/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Filter the undefined props of `obj`.
 */
export function filterUndefinedProps(obj: {
  [index: string]: any;
}): { [index: string]: any } {
  if (!obj) return {};
  const clean: { [index: string]: any } = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "undefined") {
      return;
    }
    clean[key.toString()] = value;
  });
  return clean;
}
