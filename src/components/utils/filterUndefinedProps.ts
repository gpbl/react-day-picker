/**
 * Filter the undefined props of `obj`.
 */
export function filterUndefinedProps(obj: object): object {
  const clean = { ...obj };
  Object.entries(clean).forEach(([key, value]) => {
    if (typeof value === 'undefined') {
      delete clean[key];
    }
  });
  return clean;
}
