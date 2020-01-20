/**
 * @category Components
 */
export interface ClassNames {
  /* Container element */
  container?: string;
  caption?: string;
  // Day Component
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
}
