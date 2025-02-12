import { toGeezNumerals } from "../utils/geezConverter.js";

/**
 * Formats a number using either Latin or Ethiopic (Geez) numerals
 *
 * @example
 *   ```ts
 *   formatNumber(123) // '123'
 *   formatNumber(123, 'geez') // '፻፳፫'
 *   formatNumber(2023, 'geez') // '፳፻፳፫'
 *   ```;
 *
 * @param value - The number to format
 * @param numerals - The numeral system to use:
 *
 *   - 'latn': Latin numerals (1, 2, 3...)
 *   - 'geez': Ethiopic numerals (፩, ፪, ፫...)
 *
 * @returns The formatted number string
 */
export function formatNumber(value: number, numerals: string = "latn"): string {
  if (numerals === "geez") {
    return toGeezNumerals(value);
  }

  // Use Intl.NumberFormat for other numeral systems
  const formatter = new Intl.NumberFormat("en-US", {
    numberingSystem: numerals
  });

  return formatter.format(value);
}
