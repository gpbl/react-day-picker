/**
 * Represent an element of the DayPicker user interface.
 */
export type UIElement =
  | 'root'
  | 'caption'
  | 'day'
  | 'dayWrapper'

  // Modifiers
  | 'selected'
  | 'disabled'
  | 'today'
  | 'beforemonth'
  | 'aftermonth'

  // Month Component
  | 'month'
  | 'monthTable'
  | 'monthTbody'
  | 'months'

  // Head Components
  | 'head'
  | 'headRow'
  | 'headWeekNumber'
  | 'headWeekName'

  // Container of navigation
  | 'nav'

  // Navigation buttons
  | 'navPrev'
  | 'navNext'

  // Week Component
  | 'week'
  | 'weekWeeknumber'
  | 'weekDay'

  // The weeknumber
  | 'weekNumber';
