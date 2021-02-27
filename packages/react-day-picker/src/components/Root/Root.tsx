import * as React from 'react';

import { Table } from '../../components';
import { useDayPicker, useNavigation } from '../../hooks';
import { StyledComponentProps, UIElement as UI } from '../../types';

/**
 * Render the container with the months and their captions. The number of months
 * rendered depends by the `numberOfMonths` prop.
 */
export function Root(props: StyledComponentProps): JSX.Element {
  const { className, style } = props;
  const {
    dir,
    classNames,
    styles,
    numberOfMonths,
    components: { Caption }
  } = useDayPicker();

  const { displayMonths } = useNavigation();

  const rootClassNames = [classNames[UI.Root]];
  if (numberOfMonths > 1) {
    rootClassNames.push(classNames[UI.RootMultipleMonths]);
  }
  if (className) rootClassNames.concat(className.split(' '));

  const renderMonth = (displayMonth: Date, displayIndex: number) => {
    const className = [classNames[UI.Month]];
    const style = { ...styles[UI.Month] };
    let isFirst = numberOfMonths > 1 && displayIndex === 0;
    let isLast =
      numberOfMonths > 1 && displayIndex === displayMonths.length - 1;

    if (dir === 'rtl') [isLast, isFirst] = [isFirst, isLast];

    const isMiddle = numberOfMonths > 1 && !isFirst && !isLast;

    if (isFirst) {
      className.push(classNames[UI.CaptionFirst]);
      Object.assign(style, styles[UI.CaptionFirst]);
    }
    if (isLast) className.push(classNames[UI.CaptionLast]);
    if (isMiddle) className.push(classNames[UI.CaptionMiddle]);

    return (
      <div key={displayIndex} className={className.join(' ')} style={style}>
        <Caption
          displayMonth={displayMonth}
          displayIndex={displayIndex}
          isFirst={isFirst}
          isLast={isLast}
          isMiddle={isMiddle}
        />
        isMiddle
        <Table displayMonth={displayMonth} />
      </div>
    );
  };

  return (
    <div
      className={rootClassNames.join(' ')}
      style={{ ...styles[UI.Root], ...style }}
      dir={dir}
    >
      <div className={classNames[UI.Months]} style={styles[UI.Months]}>
        {displayMonths.map(renderMonth)}
      </div>
    </div>
  );
}
