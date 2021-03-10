export interface UseInputOptions {
  /**
   * The date-fns locale object to localize the user interface. Defaults to
   * `en-US`.
   *
   * ```
   * import es from 'date-fns/locale/es';
   * ```
   *
   * See also date-fns [Internationalization
   * guide](https://date-fns.org/docs/I18n).
   *
   */
  locale?: Locale;
  /** The earliest day to start the month navigation. */
  fromDate?: Date;
  /** The latest day to end the month navigation. */
  toDate?: Date;
  /** The earliest month to start the month navigation. */
  fromMonth?: Date;
  /** The latest month to end the month navigation. */
  toMonth?: Date;
  /** The earliest year to start the month navigation. */
  fromYear?: number;
  /** The latest year to end the month navigation. */
  toYear?: number;
  /** The date to use as "today". */
  today?: Date;
  /** Make the selection required. */
  required?: boolean;
  /** The default selected day. */
  defaultSelected?: Date;
}
