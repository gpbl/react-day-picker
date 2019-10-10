export function filterEmpty(obj: object): object {
  if (!obj) {
    return {};
  }
  return Object.entries(obj)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => ((obj[key] = value), obj), {});
}
