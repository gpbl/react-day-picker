import React from 'react';

import { useDayPicker } from '../../hooks';

/**
 * Render the Footer component (empty as default).
 */
export function Footer(): JSX.Element {
  const { footer } = useDayPicker();
  return (
    <tfoot>
      <tr>
        <td colSpan={8}>{footer}</td>
      </tr>
    </tfoot>
  );
}
