import * as React from 'react';

import { SelectRangeContextValue } from './types';

/**
 * The SelectRange context shares details about the selected days when in
 * range selection mode.
 *
 * Access this context from the [[useSelectRange]] hook.
 */
export const SelectRangeContext = React.createContext<
  SelectRangeContextValue | undefined
>(undefined);
