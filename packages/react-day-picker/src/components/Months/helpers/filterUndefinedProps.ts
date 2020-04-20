/**
 * Filter the undefined props of `obj`.
 */
export function filterUndefinedProps(obj: {
  [index: string]: any;
}): { [index: string]: unknown } {
  if (!obj) return {};
  const clean: { [index: string]: unknown } = {};

  Object.entries(obj).forEach(([key, value]: [string, unknown]) => {
    if (typeof value === 'undefined') {
      return;
    }
    clean[key.toString()] = value;
  });
  return clean;
}
