import React from 'react';

import { FocusContext, FocusContextValue } from './FocusContext';

/** Hook to access the [[FocusContext]]. */
export function useFocus(): FocusContextValue {
  const context = React.useContext(FocusContext);
  if (!context) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}
