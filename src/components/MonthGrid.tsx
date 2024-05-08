import { useId } from "react";

import { useDayPicker } from "../contexts/DayPicker";
import { useNavigation } from "../contexts/Navigation";

import { Caption } from "./Caption";
import { Table } from "./Table";

export interface MonthGridProps {
  displayIndex: number;
  displayMonth: Date;
}

/**
 * Render the grid with the month, the caption, weekday header and the weeks for
 * the given month.
 */
export function MonthGrid(props: MonthGridProps) {
  const dayPicker = useDayPicker();

  const defaultId = useId();

  const { dir, classNames, styles, components, id = defaultId } = dayPicker;
  const { displayMonths } = useNavigation();

  const captionId = `${id}-${props.displayIndex}`;

  const tableId = dayPicker.id
    ? `${dayPicker.id}-grid-${props.displayIndex}`
    : undefined;

  const className = [classNames.month];
  let style = styles.month;

  let isStart = props.displayIndex === 0;
  let isEnd = props.displayIndex === displayMonths.length - 1;
  const isCenter = !isStart && !isEnd;
  if (dir === "rtl") {
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
    <div key={props.displayIndex} className={className.join(" ")} style={style}>
      <CaptionComponent
        id={captionId}
        displayMonth={props.displayMonth}
        displayIndex={props.displayIndex}
      />
      <Table
        id={tableId}
        aria-labelledby={captionId}
        displayMonth={props.displayMonth}
      />
    </div>
  );
}
