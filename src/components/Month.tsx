import * as React from 'react';

import { DayPickerProps } from '../typings'; import { prepareMonth } from './helpers';
import { Head } from './Head';
import { Week } from './Week';
import { MonthProps } from '../typings';

export const Month: React.FC<MonthProps> = props => {
  const { month, dayPickerProps } = props;
  const {
    locale,
    showCaption,
    showHead,
    classNames,
    styles,
    components: { Caption },
  } = dayPickerProps;
  const { weeks } = prepareMonth(month, dayPickerProps);
  return (
    <div className={classNames.month}>
      <table className={classNames.monthTable} style={styles.monthTable}>
        {showCaption && (
          <Caption month={month} dayPickerProps={dayPickerProps} />
        )}
        {showHead && (
          <Head
            locale={locale}
            showWeekNumber={dayPickerProps.showWeekNumber}
            dayPickerProps={dayPickerProps}
          />
        )}
        <tbody className={classNames.monthTbody} style={styles.monthTbody}>
          {Object.keys(weeks).map(weekNumber => (
            <Week
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
};
