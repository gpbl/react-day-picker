import React from 'react';

import { useDayPicker } from '../../hooks';

/** The props for the [[CaptionLabel]] component. */
export interface CaptionLabelProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

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
    >
      {formatCaption(props.displayMonth, { locale })}
    </div>
  );
}
