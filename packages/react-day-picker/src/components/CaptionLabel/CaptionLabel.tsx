import * as React from 'react';

import { useDayPicker } from 'contexts';

import { CaptionLabelProps } from './CaptionLabelProps';

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
    >
      {formatCaption(props.displayMonth, { locale })}
    </div>
  );
}
