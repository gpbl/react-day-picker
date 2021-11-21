import * as React from 'react';

import { useDayPicker } from '../../contexts/DayPicker';

/** The props for the [[CaptionLabel]] component. */
export interface CaptionLabelProps {
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
    <div
      key="caption"
      className={classNames.caption_label}
      style={styles.caption_label}
      aria-live="polite"
      aria-atomic="true"
    >
      {formatCaption(props.displayMonth, { locale })}
    </div>
  );
}
