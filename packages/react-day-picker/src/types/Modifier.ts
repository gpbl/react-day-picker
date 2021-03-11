/**
 * A _modifier_ represents different styles or states of a day displayed in the
 * calendar.
 **/
export type Modifier =
  | 'selected'
  | 'disabled'
  | 'hidden'
  | 'today'
  | 'range_start'
  | 'range_end'
  | 'range_middle'
  | string;
