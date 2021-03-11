import * as React from 'react';

import { FocusContextValue } from './types';

/**
 * The Focus context shares details about the focused day for the keyboard navigation.
 *
 * Access this context via the [[useFocus]] hook.
 */
export const FocusContext = React.createContext<FocusContextValue | undefined>(
  undefined
);
