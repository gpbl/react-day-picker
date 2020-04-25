/**
 * List of the name of the DOM elements interface elements.
 */
export enum DayPickerElements {
  ROOT = 'root',
  CAPTION = 'caption',
  DAY = 'day',
  DAYWRAPPER = 'dayWrapper',
  // Modifiers
  SELECTED = 'selected',
  DISABLED = 'disabled',
  TODAY = 'today',
  OUTSIDE_START = 'beforemonth',
  OUTSIDE_END = 'aftermonth',
  // Month Component
  MONTH = 'month',
  MONTHTABLE = 'monthTable',
  MONTHTBODY = 'monthTbody',
  MONTHS = 'months',
  // Head Components
  HEAD = 'head',
  HEADROW = 'headRow',
  HEADWEEKNUMBER = 'headWeekNumber',
  HEADWEEKNAME = 'headWeekName',
  /**
   * Container of [[Navigation]].
   */
  NAV = 'nav',
  /**
   * "Previous Month" button in [[Navigation]].
   */
  NAVPREV = 'navPrev',
  /**
   * "Next Month" button in [[Navigation]].
   */
  NAVNEXT = 'navNext',
  // Week Component
  WEEK = 'week',
  WEEKWEEKNUMBER = 'weekWeeknumber',
  WEEKDAY = 'weekDay',
  /** The weeknumber */
  WEEKNUMBER = 'weekNumber'
}
