/**
 * Represent a function to format the ARIA label for the "next month" / "prev
 * month" buttons in the navigation.
 */
export type NavButtonLabelFormatter = (
  month: Date,
  options?: { locale?: Locale }
) => string;
