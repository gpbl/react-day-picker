import React from 'react';

import { useDayPicker } from '../../hooks';
import { UIElement as UI } from '../../types';

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
      className={classNames[UI.CaptionLabel]}
      style={styles[UI.CaptionLabel]}
      aria-live="polite"
    >
      {formatCaption(props.displayMonth, { locale })}
    </div>
  );
}
