import React from 'react';

import { Caption } from 'components/Caption';
import { Table } from 'components/Table';
import { useDayPicker } from 'contexts/DayPicker';
import { useNavigation } from 'contexts/Navigation';
import { useId } from 'hooks/useId';

/** The props for the {@link Month} component. */
export interface MonthProps {
  displayIndex: number;
  displayMonth: Date;
}

/** Render a month. */
export function Month(props: MonthProps) {
  const dayPicker = useDayPicker();
  const { dir, classNames, styles, components } = dayPicker;
  const { displayMonths } = useNavigation();

  const captionId = useId(
    dayPicker.id ? `${dayPicker.id}-${props.displayIndex}` : undefined
  );

  /**
   * Adding an id to the `role="grid"` element allows consumers to reference this element through
   * `aria-controls` when implementing a `combobox`
   * 
   * @example
   *  <input role="combobox" aria-haspopup="grid" aria-controls="daypicker-id-0-grid"/>
   */
  const tableId = useId(
    dayPicker.id ? `${dayPicker.id}-${props.displayIndex}-grid` : undefined
  )

  const className = [classNames.month];
  let style = styles.month;

  let isStart = props.displayIndex === 0;
  let isEnd = props.displayIndex === displayMonths.length - 1;
  const isCenter = !isStart && !isEnd;
  if (dir === 'rtl') {
    [isEnd, isStart] = [isStart, isEnd];
  }

  if (isStart) {
    className.push(classNames.caption_start);
    style = { ...style, ...styles.caption_start };
  }
  if (isEnd) {
    className.push(classNames.caption_end);
    style = { ...style, ...styles.caption_end };
  }
  if (isCenter) {
    className.push(classNames.caption_between);
    style = { ...style, ...styles.caption_between };
  }

  const CaptionComponent = components?.Caption ?? Caption;

  return (
    <div key={props.displayIndex} className={className.join(' ')} style={style}>
      <CaptionComponent id={captionId} displayMonth={props.displayMonth} />
      <Table id={tableId} aria-labelledby={captionId} displayMonth={props.displayMonth} />
    </div>
  );
}
