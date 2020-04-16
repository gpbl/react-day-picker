export const LocaleUtils: {
  formatDate(date: Date, format?: string | string[], locale?: string): string;
  formatDay(day: Date, locale?: string): string;
  formatMonthTitle(month: Date, locale?: string): string;
  formatWeekdayLong(weekday: number, locale?: string): string;
  formatWeekdayShort(weekday: number, locale?: string): string;
  getFirstDayOfWeek(locale?: string): number;
  getMonths(
    locale?: string
  ): [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  parseDate(str: string, format?: string, locale?: string): Date;
};
export type LocaleUtils = typeof LocaleUtils;
