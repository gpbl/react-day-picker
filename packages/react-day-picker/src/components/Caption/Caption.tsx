import * as React from 'react';

import { MonthsDropdown, Navigation, YearsDropdown } from '../../components';
import { useProps } from '../../hooks/useProps';

export interface CaptionProps {
  /** The month where the caption is displayed. */
  displayMonth: Date;
}

export function Caption(props: CaptionProps): JSX.Element {
  const { displayMonth } = props;
  const {
    classNames,
    navigationType: navigation,
    locale,
    formatters: { formatCaption }
  } = useProps();
  return (
    <div className={classNames.Caption}>
      {navigation === 'dropdown' ? (
        <div className={classNames.CaptionDropdowns}>
          <MonthsDropdown displayMonth={displayMonth} />
          <YearsDropdown displayMonth={displayMonth} />
        </div>
      ) : (
        <>
          <div className={classNames.DropdownLabel} aria-live="polite">
            {formatCaption(displayMonth, { locale })}
          </div>
          {navigation === 'buttons' && (
            <Navigation displayMonth={displayMonth} />
          )}
        </>
      )}
    </div>
  );
}
