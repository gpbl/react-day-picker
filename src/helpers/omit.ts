export function omitKeys<T extends object, K extends string>(
  obj: T,
  keys: K[]
) {
  const exclude = new Set(keys);
  return Object.fromEntries(
    Object.entries(obj).filter((e) => !exclude.has(e[0] as K))
  );
}
