/**
 * Is date
 *
 * @param {unknown} value - The value to check
 * @returns {boolean} True if the value is a valid date
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}
