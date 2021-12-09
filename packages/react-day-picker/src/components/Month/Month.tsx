import React from 'react';

import { useId } from '@reach/auto-id';

import { useDayPicker, useNavigation } from '../../contexts';
import { Table } from '../Table';

/** The props for the [[Month]] component. */
export interface MonthProps {
  displayIndex: number;
  displayMonth: Date;
}

/** Render a month. */
export function Month(props: MonthProps) {
  const {
    dir,
    classNames,
    styles,
    components: { Caption }
  } = useDayPicker();
  const captionId = useId();
  const { displayMonths } = useNavigation();

  const className = [classNames.month];
  let style = { ...styles.month };
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
    className.push(classNames.caption_center);
    style = { ...style, ...styles.caption_center };
  }

  return (
    <div key={props.displayIndex} className={className.join(' ')} style={style}>
      <Caption id={captionId} displayMonth={props.displayMonth} />
      <Table captionId={captionId} displayMonth={props.displayMonth} />
    </div>
  );
}
