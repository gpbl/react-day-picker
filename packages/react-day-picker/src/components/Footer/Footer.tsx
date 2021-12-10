import React from 'react';

import { useDayPicker } from '@contexts/DayPicker';

/** Render the Footer component (empty as default).*/
export function Footer(): JSX.Element {
  const {
    footer,
    styles,
    classNames: { tfoot }
  } = useDayPicker();
  if (!footer) return <></>;
  return (
    <tfoot className={tfoot} style={styles.tfoot}>
      <tr>
        <td colSpan={8}>{footer}</td>
      </tr>
    </tfoot>
  );
}
