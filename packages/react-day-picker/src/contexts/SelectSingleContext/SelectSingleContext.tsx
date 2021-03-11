import React from 'react';

import { SelectSingleContextValue } from './types';

/**
 * The SelectSingle context shares details about the selected days when in
 * single selection mode.
 *
 * Access this context via the [[useSelectSingle]] hook.
 */
export const SelectSingleContext = React.createContext<
  SelectSingleContextValue | undefined
>(undefined);
