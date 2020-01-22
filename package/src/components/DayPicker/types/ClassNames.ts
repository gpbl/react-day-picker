/**
 * Describe the CSS classes added by DayPicker to the resulting HTML.
 *
 * See {@link defaultClassNames} for the default values.
 */
export type ClassNames = {
  container?: string;
  caption?: string;
  day?: string;
  dayWrapper?: string;
  // Modifiers
  selected?: string;
  disabled?: string;
  today?: string;
  outside?: string;
  // Month Component
  month?: string;
  monthTable?: string;
  monthTbody?: string;
  months?: string;
  // Head Components
  head?: string;
  headRow?: string;
  headWeekNumber?: string;
  headWeekName?: string;
  // Navigation Component
  nav?: string;
  navPrev?: string;
  navNext?: string;
  // Week Component
  week?: string;
  weekWeeknumber?: string;
  weekDay?: string;
  // WeekNumber Component
  weekNumber?: string;
  [key: string]: string | undefined;
};
