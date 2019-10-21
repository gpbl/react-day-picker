import * as React from 'react';

import { getWeeks } from './helpers/getWeeks';
import { Head } from './Head';
import { Week } from './Week';

export const Month: React.FC<ReactDayPicker.MonthProps> = props => {
  const { month, dayPickerProps } = props;
  const { locale, classNames, styles } = dayPickerProps;
  const { showCaption, showHead } = dayPickerProps;
  const {
    components: { Caption },
  } = dayPickerProps;

  const weeks = getWeeks(month, dayPickerProps);

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
