import * as React from 'react';

import { SelectMultipleContextValue } from './types';

/**
 * The SelectMultiple context shares details about the selected days when in
 * multiple selection mode.
 *
 * Access this context from the [[useSelectMultiple]] hook.
 */
export const SelectMultipleContext = React.createContext<
  SelectMultipleContextValue | undefined
>(undefined);
