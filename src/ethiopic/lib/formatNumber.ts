export function formatNumber(value: number, numerals: string = "latn"): string {
  // Use Intl.NumberFormat to create a formatter with the specified numbering system
  const formatter = new Intl.NumberFormat("en-US", {
    numberingSystem: numerals
  });

  return formatter.format(value);
}
