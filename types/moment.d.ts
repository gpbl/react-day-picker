// TypeScript Version: 2.2

import { LocaleUtils } from './utils';

interface MomentLocaleUtils extends LocaleUtils {
  formatDate(date: Date, format?: string, locale?: string): string;
  parseDate(str: string, format?: string, locale?: string): Date | undefined;
}

export = MomentLocaleUtils;
