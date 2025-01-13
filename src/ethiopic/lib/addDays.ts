/**
 * Adds days to an Ethiopic date
 *
 * @param {Date} date - The original date
 * @param {number} amount - The number of days to add
 * @returns {Date} The new date
 */
export function addDays(date: Date, amount: number): Date {
  const julianDay = Math.floor(date.getTime() / 86400000 + 2440587.5);
  const newJulianDay = julianDay + amount;
  return new Date((newJulianDay - 2440587.5) * 86400000);
}
