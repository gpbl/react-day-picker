declare module "hijri-date/lib/safe" {
  export default class HijriDate {
    constructor(date?: Date | string | number);
    getDate(): number;
    getMonth(): number;
    getFullYear(): number;
    setDate(date: number): void;
    setMonth(month: number, date?: number): void;
    setFullYear(year: number): void;
    toGregorian(): Date;
    format(formatStr: string): string;
    getDay(): number;
    setHours(hours: number, min?: number, sec?: number, ms?: number): void;
  }

  export function toHijri(date: Date): HijriDate;
}
