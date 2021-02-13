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
  | 'table'
  | 'tbody'
  | 'months'

  // Head Components
  | 'head'
  | 'headRow'
  | 'headCell'

  // Container of navigation
  | 'nav'

  // Navigation buttons
  | 'navPrevButton'
  | 'navNextButton'

  // Week Component
  | 'row'
  | 'rowHead'
  | 'cell'

  // The weeknumber
  | 'weekNumber';
