import * as React from 'react';
import { Head } from '../Head';
import { WeekRow } from '../WeekRow';
import { getWeeks } from './getWeeks';
import { MonthTableProps } from './types';

/**
 * Render the month table.
 * @category Components
 */
export function MonthTable(props: MonthTableProps): JSX.Element {
  const { month, dayPickerProps } = props;
  const { locale, classNames, styles } = dayPickerProps;
  const { showCaption, showHead } = dayPickerProps;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const MonthCaption = dayPickerProps.components!.MonthCaption;

  const weeks = getWeeks(month, dayPickerProps);

  return (
    <div className={classNames?.month}>
      <table className={classNames?.monthTable} style={styles?.monthTable}>
        {showCaption && (
          <MonthCaption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && (
          <Head
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            locale={locale!}
            showWeekNumber={dayPickerProps.showWeekNumber}
            dayPickerProps={dayPickerProps}
          />
        )}
        <tbody className={classNames?.monthTbody} style={styles?.monthTbody}>
          {Object.keys(weeks).map((weekNumber) => (
            <WeekRow
              currentMonth={month}
              key={weekNumber}
              week={weeks[weekNumber]}
              weekNumber={Number(weekNumber)}
              dayPickerProps={dayPickerProps}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
