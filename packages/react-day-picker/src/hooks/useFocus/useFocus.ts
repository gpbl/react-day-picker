import * as React from 'react';

import { FocusContext, FocusContextValue } from './FocusContext';

/** Return the context for handling focus via keyboard. */
export function useFocus(): FocusContextValue {
  const context = React.useContext(FocusContext);
  if (!context) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}
