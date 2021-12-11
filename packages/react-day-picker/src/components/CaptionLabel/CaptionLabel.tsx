import React from 'react';

import { useDayPicker } from 'contexts/DayPicker';

/** The props for the [[CaptionLabel]] component. */
export interface CaptionLabelProps {
  /** The ID for the heading element. Must be the same as the labelled-by in Table. */
  id?: string;
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

/** Render the caption for the displayed month. This component is used when `captionLayout="buttons"`. */
export function CaptionLabel(props: CaptionLabelProps): JSX.Element {
  const {
    locale,
    classNames,
    styles,
    formatters: { formatCaption }
  } = useDayPicker();
  return (
    <h2
      className={classNames.caption_label}
      style={styles.caption_label}
      aria-live="polite"
      aria-atomic="true"
      id={props.id}
    >
      {formatCaption(props.displayMonth, { locale })}
    </h2>
  );
}
