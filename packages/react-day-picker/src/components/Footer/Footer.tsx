import * as React from 'react';

import { useDayPicker } from 'contexts';

/** Render the Footer component (empty as default).*/
export function Footer(): JSX.Element {
  const { footer } = useDayPicker();
  if (!footer) return <></>;
  return (
    <tfoot>
      <tr>
        <td colSpan={8}>{footer}</td>
      </tr>
    </tfoot>
  );
}
