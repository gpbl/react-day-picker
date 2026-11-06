import type { Locale as DateFnsLocale } from "date-fns/locale";

/** Matches quoted literals (kept as they are) or day-of-month tokens. */
const dayTokenRegExp = /'(?:[^']|'')*'|d+o?/g;

/** Matches a character that would glue a suffix to the day number. */
const wordCharRegExp = /[\p{L}\p{M}\p{N}]/u;

/**
 * Returns the pattern for the full date used in the day labels.
 *
 * This is `PPPP`, unless the locale's full date pattern formats the day of the
 * month differently from the day number shown in the day button (`d`): for
 * example, as an ordinal glued to the number (`22nd`) or zero-padded (`01`).
 * In that case it returns the locale's full date pattern with that day token
 * replaced by `d`, so the visible day number is a word of the label (WCAG
 * 2.5.3). Ordinals separated from the number, like `22.` or `22-a`, are kept.
 *
 * @param date The date to format.
 * @param locale The date-fns locale to read the full date pattern from.
 * @param formatDate The function formatting the date with a pattern.
 * @returns The pattern to format the full date with.
 */
export function getFullDatePattern(
  date: Date,
  locale: Pick<DateFnsLocale, "formatLong"> | undefined,
  formatDate: (date: Date, pattern: string) => string,
): string {
  const fullPattern = locale?.formatLong?.date({ width: "full" });
  if (!fullPattern) return "PPPP";

  const day = formatDate(date, "d");
  let changed = false;
  const pattern = fullPattern.replace(dayTokenRegExp, (token) => {
    if (token.startsWith("'") || token === "d") return token;
    const formattedDay = formatDate(date, token);
    const nextChar = formattedDay.charAt(day.length);
    const matchesDay =
      formattedDay.startsWith(day) && !wordCharRegExp.test(nextChar);
    if (matchesDay) return token;
    changed = true;
    return "d";
  });

  return changed ? pattern : "PPPP";
}
