export interface Styles {
  /* Container element */
  container?: React.CSSProperties;
  caption?: React.CSSProperties;
  // Day Component
  day?: React.CSSProperties;
  dayWrapper?: React.CSSProperties;
  // Month Component
  month?: React.CSSProperties;
  monthTable?: React.CSSProperties;
  monthTbody?: React.CSSProperties;
  months?: React.CSSProperties;
  // Head Components
  head?: React.CSSProperties;
  headRow?: React.CSSProperties;
  headWeekNumber?: React.CSSProperties;
  headWeekName?: React.CSSProperties;
  // Navigation Component
  nav?: React.CSSProperties;
  navStart?: React.CSSProperties;
  navPrev?: React.CSSProperties;
  navNext?: React.CSSProperties;
  // Week Component
  week?: React.CSSProperties;
  weekWeeknumber?: React.CSSProperties;
  weekDay?: React.CSSProperties;
  // WeekNumber Component
  weekNumber?: React.CSSProperties;
  // Modifiers
  modifiers?: ModifiersClassNames;
}
