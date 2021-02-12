import * as dateFns from 'date-fns';

/**
 * The function used to format the caption. Use the [[formatCaption]] prop to
 * use another function.
 */
export function formatCaption(
  month: Date,
  formatOptions?: { locale?: dateFns.Locale }
): string {
  return dateFns.format(month, 'LLLL Y', formatOptions);
}
