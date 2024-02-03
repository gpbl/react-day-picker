/**
 * Takes an arbitrary number of arguments and returns a string of class names.
 * Filters out any falsy values before joining.
 */
export function classNames(...arr: unknown[]) {
  return arr.filter(Boolean).join(" ");
}
