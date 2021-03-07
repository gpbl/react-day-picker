// TODO: something like these should work better string extends ReservedNames ? never : string?
/**
 * A _modifier_ represent different state or styles for the days displayed in the
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
